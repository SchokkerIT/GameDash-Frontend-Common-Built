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
exports.Connection = void 0;
var uuid_1 = require("uuid");
var CachedValue_1 = require("../../cache/CachedValue");
var Logger_1 = require("../../logger/Logger");
var Json_1 = require("../../json/Json");
var Mutex_1 = require("../../mutex/Mutex");
var HostHelpers_1 = require("../host/HostHelpers");
var Channels_1 = require("./channel/Channels");
var QueryParameter_1 = require("./query/QueryParameter");
var ConnectionManager_1 = require("./manager/ConnectionManager");
var AlreadyConnectedException_1 = __importDefault(require("./AlreadyConnectedException"));
var Connection = /** @class */ (function () {
    function Connection(host) {
        this.channels = new CachedValue_1.CachedValue();
        this.manager = new CachedValue_1.CachedValue();
        this.connectMutex = new Mutex_1.Mutex();
        this.disconnectMutex = new Mutex_1.Mutex();
        this.headers = [];
        this.queryParameters = [];
        this.host = host;
        this.id = (0, uuid_1.v4)();
    }
    Connection.prototype.getId = function () {
        return this.id;
    };
    Connection.prototype.getName = function () {
        return this.name;
    };
    Connection.prototype.setName = function (name) {
        this.name = name;
    };
    Connection.prototype.getHost = function () {
        return this.host;
    };
    Connection.prototype.connect = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getManager().connect(options)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
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
    Connection.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getManager().reconnect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Connection.prototype.isConnected = function () {
        return this.getManager().isConnected();
    };
    Connection.prototype.isConnecting = function () {
        return this.getManager().isConnecting();
    };
    Connection.prototype.isDisconnecting = function () {
        return this.getManager().isDisconnecting();
    };
    Connection.prototype.getSocket = function () {
        return this.getManager().getSocket();
    };
    Connection.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.disconnectMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getManager().disconnect()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
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
    Connection.prototype.ensureConnected = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isDisconnecting()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.awaitDisconnected()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(!this.isConnected() && !this.isConnecting())) return [3 /*break*/, 6];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.connect()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!(e_1 instanceof AlreadyConnectedException_1.default)) {
                            throw e_1;
                        }
                        return [3 /*break*/, 6];
                    case 6:
                        if (!!this.isConnected()) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.awaitConnected()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Connection.prototype.awaitConnected = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.onConnect(function () {
                resolve();
            });
        });
    };
    Connection.prototype.awaitDisconnected = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.onDisconnect(function () {
                resolve();
            });
        });
    };
    Connection.prototype.getChannels = function () {
        var _this = this;
        return this.channels.handleSync(function () { return new Channels_1.Channels(_this); });
    };
    Connection.prototype.destroyChannels = function () {
        this.channels.clear();
    };
    Connection.prototype.sendMessage = function (channelName, message, ackCallback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Logger_1.Logger.getInstance().debug("Sending " + (typeof message !== 'string' ? Json_1.Json.encode(message) : message) + " to " + channelName);
                        if (!!this.isConnected()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.awaitConnected()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.getManager().getSocket().emit(channelName, message, function () {
                            var parameters = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                parameters[_i] = arguments[_i];
                            }
                            Logger_1.Logger.getInstance().debug("Received ack callback for channel " + channelName + " with data " + Json_1.Json.encode(parameters));
                            if (ackCallback) {
                                ackCallback.apply(void 0, parameters);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Connection.prototype.onConnect = function (callback) {
        return this.getManager().onConnect(callback);
    };
    Connection.prototype.onDisconnect = function (callback) {
        return this.getManager().onDisconnect(callback);
    };
    Connection.prototype.onFailedConnection = function (callback) {
        return this.getManager().onFailedConnection(callback);
    };
    Connection.prototype.getManager = function () {
        return this.manager.handleObjectConstruction(ConnectionManager_1.ConnectionManager, [this.host, this]);
    };
    Connection.prototype.getHeaders = function () {
        return this.headers;
    };
    Connection.prototype.getHeader = function (name) {
        return this.getHeaders().find(function (header) { return header.getName() === name; });
    };
    Connection.prototype.addHeader = function (header) {
        this.headers.push(header);
    };
    Connection.prototype.isProxied = function () {
        return HostHelpers_1.HostHelpers.isProxyable(this.host);
    };
    Connection.prototype.getQueryParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parameters, proxyableHost, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        parameters = this.queryParameters;
                        if (!this.isProxied()) return [3 /*break*/, 4];
                        proxyableHost = this.host;
                        _b = (_a = parameters).push;
                        _c = QueryParameter_1.QueryParameter.bind;
                        _d = [void 0, 'host'];
                        return [4 /*yield*/, proxyableHost.getHostname()];
                    case 1:
                        _b.apply(_a, [new (_c.apply(QueryParameter_1.QueryParameter, _d.concat([_o.sent()])))()]);
                        _f = (_e = parameters).push;
                        _g = QueryParameter_1.QueryParameter.bind;
                        _h = [void 0, 'port'];
                        return [4 /*yield*/, proxyableHost.getSocketPort()];
                    case 2:
                        _f.apply(_e, [new (_g.apply(QueryParameter_1.QueryParameter, _h.concat([_o.sent()])))()]);
                        _k = (_j = parameters).push;
                        _l = QueryParameter_1.QueryParameter.bind;
                        _m = [void 0, 'scheme'];
                        return [4 /*yield*/, proxyableHost.socketIsSecure()];
                    case 3:
                        _k.apply(_j, [new (_l.apply(QueryParameter_1.QueryParameter, _m.concat([(_o.sent()) ? 'https' : 'http'])))()]);
                        _o.label = 4;
                    case 4: return [2 /*return*/, parameters];
                }
            });
        });
    };
    Connection.prototype.getQueryParameter = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQueryParameters()];
                    case 1: return [2 /*return*/, (_a.sent()).find(function (parameter) { return parameter.getName() === name; })];
                }
            });
        });
    };
    Connection.prototype.addQueryParameter = function (parameter) {
        this.queryParameters.push(parameter);
    };
    Connection.prototype.compare = function (connection) {
        return connection instanceof Connection && this.getId() === connection.getId();
    };
    Connection.create = function (host) {
        return new Connection(host);
    };
    return Connection;
}());
exports.Connection = Connection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9yZWxheS9jb25uZWN0aW9uL0Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQW9DO0FBRXBDLHVEQUE0RDtBQUM1RCw4Q0FBbUQ7QUFDbkQsd0NBQTZDO0FBQzdDLDJDQUFnRDtBQUNoRCxtREFBa0Q7QUFDbEQsK0NBQThDO0FBRTlDLHlEQUF3RDtBQUN4RCxpRUFBZ0c7QUFFaEcsMEZBQW9FO0FBT3BFO0lBYUMsb0JBQWEsSUFBVztRQVRQLGFBQVEsR0FBRyxJQUFJLHlCQUFXLEVBQVksQ0FBQztRQUN2QyxZQUFPLEdBQUcsSUFBSSx5QkFBVyxFQUFxQixDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUMzQixvQkFBZSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFHdkMsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBSTlDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBQSxTQUFNLEdBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUVDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUVsQixDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFTLElBQVk7UUFFcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFFQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVLLDRCQUFPLEdBQWIsVUFF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