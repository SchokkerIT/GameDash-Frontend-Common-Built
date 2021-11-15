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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsSubscriptionManager = void 0;
var Mutex_1 = require("controllers/mutex/Mutex");
var ChannelsSubscriptionManager = /** @class */ (function () {
    function ChannelsSubscriptionManager(collection) {
        this.subscribeMutex = new Mutex_1.Mutex();
        this.collection = collection;
    }
    ChannelsSubscriptionManager.prototype.shouldAttemptChannelSubscribe = function (channel) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = !channel.subscribed.isCached();
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, channel.isSubscribed()];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2: return [2 /*return*/, _a];
                }
            });
        });
    };
    ChannelsSubscriptionManager.prototype.getUnsubscribedChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var channels, _i, _a, channel;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        channels = [];
                        _i = 0;
                        return [4 /*yield*/, this.collection.getChannels()];
                    case 1:
                        _a = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        channel = _a[_i];
                        return [4 /*yield*/, this.shouldAttemptChannelSubscribe(channel)];
                    case 3:
                        if (_b.sent()) {
                            channels.push(channel);
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, channels];
                }
            });
        });
    };
    ChannelsSubscriptionManager.prototype.subscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscribeMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            var acquireMutexes, releaseMutexes, unsubscribedChannels_1, addChannels_1;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        acquireMutexes = function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, Promise.all(this.collection.getChannels().map(function (channel) { return channel.subscribeMutex.acquire(); }))];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        releaseMutexes = function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, Promise.all(this.collection.getChannels().map(function (channel) { return channel.subscribeMutex.release(); }))];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        return [4 /*yield*/, acquireMutexes()];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, , 5, 7]);
                                        return [4 /*yield*/, this.getUnsubscribedChannels()];
                                    case 3:
                                        unsubscribedChannels_1 = _a.sent();
                                        if (!unsubscribedChannels_1.length) {
                                            return [2 /*return*/];
                                        }
                                        addChannels_1 = function (connection, channels) { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                                                            connection.sendMessage('addChannels', {
                                                                names: (unsubscribedChannels_1.map(function (channel) { return channel.getName(); }))
                                                            }, function () { return __awaiter(_this, void 0, void 0, function () {
                                                                var _i, channels_1, channel;
                                                                return __generator(this, function (_a) {
                                                                    for (_i = 0, channels_1 = channels; _i < channels_1.length; _i++) {
                                                                        channel = channels_1[_i];
                                                                        channel.subscribed.setValue(true);
                                                                        channel.setSubscriptionIntent(true);
                                                                    }
                                                                    resolve();
                                                                    return [2 /*return*/];
                                                                });
                                                            }); });
                                                        })];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        return [4 /*yield*/, Promise.all(this.getConnections().map(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                                var connection, channels;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            connection = result.connection, channels = result.channels;
                                                            return [4 /*yield*/, addChannels_1(connection, channels)];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 4:
                                        _a.sent();
                                        return [3 /*break*/, 7];
                                    case 5: return [4 /*yield*/, releaseMutexes()];
                                    case 6:
                                        _a.sent();
                                        return [7 /*endfinally*/];
                                    case 7: return [2 /*return*/];
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
    ChannelsSubscriptionManager.prototype.getConnections = function () {
        var results = {};
        for (var _i = 0, _a = this.collection.getChannels(); _i < _a.length; _i++) {
            var channel = _a[_i];
            var connection = channel.getConnection();
            if (!results[connection.getId()]) {
                results[connection.getId()] = {
                    connection: connection,
                    channels: [channel]
                };
                continue;
            }
            results[connection.getId()].channels.push(channel);
        }
        return (Object.entries(results)
            .map(function (_a) {
            var id = _a[0], result = _a[1];
            return result;
        }));
    };
    ;
    ChannelsSubscriptionManager.create = function (collection) {
        return new ChannelsSubscriptionManager(collection);
    };
    return ChannelsSubscriptionManager;
}());
exports.ChannelsSubscriptionManager = ChannelsSubscriptionManager;
//# sourceMappingURL=ChannelsSubscriptionManager.js.map