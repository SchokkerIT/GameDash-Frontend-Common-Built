"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
var Mutex_1 = require("controllers/mutex/Mutex");
var CachedValue_1 = require("controllers/cache/CachedValue");
var Listeners_1 = require("./listener/Listeners");
var AlreadySubscribedException_1 = __importDefault(require("./AlreadySubscribedException"));
var Channel = /** @class */ (function () {
    function Channel(connection, name) {
        this.subscribeMutex = new Mutex_1.Mutex();
        this.unSubscribeMutex = new Mutex_1.Mutex();
        this.isSubscribedMutex = new Mutex_1.Mutex();
        this.ensureSubscribedMutex = new Mutex_1.Mutex();
        this.subscribed = new CachedValue_1.CachedValue();
        this.listeners = new CachedValue_1.CachedValue();
        this.subscriptionIntent = false;
        this.connection = connection;
        this.name = name;
        this.subscribed.setExpiryThreshold(10);
    }
    Channel.prototype.getName = function () {
        return this.name;
    };
    Channel.prototype.subscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setSubscriptionIntent(true);
                        if (!this.connection.isConnected()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.subscribeMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    if (this.subscribed.getValue()) {
                                        return [2 /*return*/];
                                    }
                                    return [2 /*return*/, new Promise(function (resolve) {
                                            _this.connection.sendMessage('addChannel', {
                                                name: _this.getName()
                                            }, function () {
                                                _this.subscribed.setValue(true);
                                                resolve(null);
                                            });
                                        })];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Channel.prototype.unsubscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setSubscriptionIntent(false);
                        if (!this.connection.isConnected()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.unSubscribeMutex.runExclusive(function () {
                                new Promise(function (resolve) {
                                    if (!_this.subscribed.getValue()) {
                                        return;
                                    }
                                    return _this.connection.sendMessage('removeChannel', {
                                        channels: [_this.getName()]
                                    }, function () {
                                        _this.clearListeners();
                                        _this.subscribed.setValue(false);
                                        resolve(null);
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Channel.prototype.isSubscribed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isSubscribedMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, (this.subscribed.handle(function () { return (new Promise(function (resolve) {
                                        _this.connection.sendMessage('channelExists', {
                                            name: _this.getName()
                                        }, function (subscribed) {
                                            _this.subscribed.setValue(subscribed);
                                            resolve(subscribed);
                                        });
                                    })); }))];
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Channel.prototype.ensureSubscribed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureSubscribedMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            var e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.isSubscribed()];
                                    case 1:
                                        if (_a.sent()) {
                                            return [2 /*return*/];
                                        }
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, this.subscribe()];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        e_1 = _a.sent();
                                        if (!(e_1 instanceof AlreadySubscribedException_1.default)) {
                                            throw e_1;
                                        }
                                        return [3 /*break*/, 5];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Channel.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.unsubscribe()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.subscribe()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getListeners().reconnect()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Channel.prototype.getConnection = function () {
        return this.connection;
    };
    Channel.prototype.getListeners = function () {
        var _this = this;
        return this.listeners.handleSync(function () { return new Listeners_1.Listeners(_this.connection, _this); });
    };
    Channel.prototype.clearListeners = function () {
        this.listeners.clear();
    };
    Channel.prototype.getSubscriptionIntent = function () {
        return this.subscriptionIntent;
    };
    Channel.prototype.setSubscriptionIntent = function (intent) {
        this.subscriptionIntent = intent;
    };
    Channel.prototype.compare = function (channel) {
        return channel.getName() === this.getName();
    };
    Channel.prototype.clearCache = function () {
        this.subscribed.clear();
    };
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map