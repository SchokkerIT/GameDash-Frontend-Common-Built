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
exports.ConnectionManager = void 0;
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var Logger_1 = require("../../../logger/Logger");
var ChannelCollection_1 = require("../channel/collection/ChannelCollection");
var Listeners_1 = require("../listener/Listeners");
var ConnectWrapper_1 = require("./ConnectWrapper");
var ConnectionException_1 = __importDefault(require("../ConnectionException"));
var NotConnectedException_1 = __importDefault(require("../NotConnectedException"));
var AlreadyConnectedException_1 = __importDefault(require("../AlreadyConnectedException"));
var ConnectionManager = /** @class */ (function () {
    function ConnectionManager(host, connection) {
        var _this = this;
        this.connecting = false;
        this.listeners = new Listeners_1.Listeners();
        this.connected = false;
        this.disconnecting = false;
        this.handleUnexpectedDisconnect = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!this.isConnected() || this.isDisconnecting()) {
                            //we already know about the disconnection, which means we initiated it
                            return [2 /*return*/];
                        }
                        _b = (_a = Logger_1.Logger.getInstance()).info;
                        _c = "Unexpectedly lost connection to ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 1:
                        _d = _c + (_j.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 2:
                        _b.apply(_a, [_d + (_j.sent())]);
                        if (!this.isConnected()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.disconnect({
                                clearState: false
                            })];
                    case 3:
                        _j.sent();
                        _j.label = 4;
                    case 4: return [4 /*yield*/, Promise.all([
                            this.invokeOnUnexpectedDisconnect()
                        ])];
                    case 5:
                        _j.sent();
                        _f = (_e = Logger_1.Logger.getInstance()).info;
                        _g = "Attempting to re-establish connection to ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 6:
                        _h = _g + (_j.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 7:
                        _f.apply(_e, [_h + (_j.sent())]);
                        return [4 /*yield*/, this.reconnect()];
                    case 8:
                        _j.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.host = host;
        this.connection = connection;
    }
    ConnectionManager.prototype.connect = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, connectToSubscribedChannels, wrapper, _b, _c, _d, _e, _f, _g, _h, _j;
            var _this = this;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _a = options.connectToSubscribedChannels, connectToSubscribedChannels = _a === void 0 ? true : _a;
                        if (this.isConnected()) {
                            throw new AlreadyConnectedException_1.default('Already connected to the relay server');
                        }
                        this.setIsConnecting(false);
                        _k.label = 1;
                    case 1:
                        _k.trys.push([1, , 9, 10]);
                        wrapper = new ConnectWrapper_1.ConnectWrapper(function () { return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var socket, _a, _b, handleFailedConnection, e_1;
                            var _c;
                            var _this = this;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        _d.trys.push([0, 3, , 4]);
                                        _a = socket_io_client_1.default;
                                        return [4 /*yield*/, this.getSocketUri()];
                                    case 1:
                                        _b = [(_d.sent()).toString()];
                                        _c = {
                                            reconnection: false,
                                            forceNew: true,
                                            transports: ['websocket']
                                        };
                                        return [4 /*yield*/, this.createQueryStruct()];
                                    case 2:
                                        socket = _a.apply(void 0, _b.concat([(_c.query = _d.sent(),
                                                _c)]));
                                        this.setSocket(socket);
                                        handleFailedConnection = function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.invokeOnFailedConnection()];
                                                    case 1:
                                                        _a.sent();
                                                        reject(new ConnectionException_1.default('Could not connect'));
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        this.getSocket().on('connect_failed', handleFailedConnection);
                                        this.getSocket().on('connect_error', handleFailedConnection);
                                        this.getSocket().on('connect', function () { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        this.setIsConnected(true);
                                                        this.getSocket().on('disconnect', function () {
                                                            _this.handleUnexpectedDisconnect();
                                                        });
                                                        return [4 /*yield*/, this.invokeOnConnect()];
                                                    case 1:
                                                        _a.sent();
                                                        resolve();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        return [3 /*break*/, 4];
                                    case 3:
                                        e_1 = _d.sent();
                                        reject(e_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }); });
                        if (options.maxAttempts !== undefined) {
                            wrapper.setMaxAttempts(options.maxAttempts);
                        }
                        _c = (_b = Logger_1.Logger.getInstance()).info;
                        _d = "Connecting to relay ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 2:
                        _e = _d + (_k.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 3:
                        _c.apply(_b, [_e + (_k.sent()) + "..."]);
                        return [4 /*yield*/, wrapper.attempt()];
                    case 4:
                        _k.sent();
                        _g = (_f = Logger_1.Logger.getInstance()).info;
                        _h = "Connected to relay ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 5:
                        _j = _h + (_k.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 6:
                        _g.apply(_f, [_j + (_k.sent())]);
                        if (!connectToSubscribedChannels) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.connectToSubscribedChannels()];
                    case 7:
                        _k.sent();
                        _k.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        this.setIsConnecting(false);
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this.isConnected()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.disconnect()];
                    case 1:
                        _e.sent();
                        _e.label = 2;
                    case 2: return [4 /*yield*/, this.connect({
                            connectToSubscribedChannels: false
                        })];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, this.reconnectToSubscribedChannels()];
                    case 4:
                        _e.sent();
                        _b = (_a = Logger_1.Logger.getInstance()).info;
                        _c = "Reconnected to ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 5:
                        _d = _c + (_e.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 6:
                        _b.apply(_a, [_d + (_e.sent())]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.connectToSubscribedChannels = function (options) {
        if (options === void 0) { options = {
            forceChannelConnectAttempt: false
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var forceChannelConnectAttempt, channels, channelCollection, channelNames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        forceChannelConnectAttempt = options.forceChannelConnectAttempt;
                        channels = this.connection.getChannels().getAll();
                        channelCollection = ChannelCollection_1.ChannelCollection.create(channels.filter(function (channel) { return (channel.getSubscriptionIntent()); }));
                        if (!(channelCollection.countChannels() > 0)) return [3 /*break*/, 2];
                        channelNames = channelCollection.getChannels().map(function (channel) { return channel.getName(); });
                        if (forceChannelConnectAttempt) {
                            //force a channel connection attempt by clearing the cache of all channels
                            Logger_1.Logger.getInstance().info("Forcing channel connection for " + channelNames.join(', ') + "...");
                            channelCollection.clearCache();
                        }
                        return [4 /*yield*/, channelCollection.subscribe()];
                    case 1:
                        _a.sent();
                        Logger_1.Logger.getInstance().info("Connected to channels: " + channelNames.join(', '));
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.reconnectToSubscribedChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var channels;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channels = this.connection.getChannels().getAll();
                        return [4 /*yield*/, Promise.all(channels.map(function (channel) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!channel.getSubscriptionIntent()) return [3 /*break*/, 2];
                                            return [4 /*yield*/, channel.reconnect()];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        Logger_1.Logger.getInstance().info("Reconnected to channels " + channels.map(function (channel) { return channel.getName(); }).join(', '));
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.isConnected = function () {
        return this.connected;
    };
    ConnectionManager.prototype.setIsConnected = function (connected) {
        this.connected = connected;
    };
    ConnectionManager.prototype.isDisconnecting = function () {
        return this.disconnecting;
    };
    ConnectionManager.prototype.setIsDisconnecting = function (disconnecting) {
        this.disconnecting = disconnecting;
    };
    ConnectionManager.prototype.disconnect = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, clearState, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = options.clearState, clearState = _a === void 0 ? true : _a;
                        if (!this.isConnected()) {
                            throw new NotConnectedException_1.default('Not currently connected');
                        }
                        this.setIsDisconnecting(true);
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, , 5, 6]);
                        this.getSocket().disconnect();
                        this.clearSocket();
                        this.setIsConnected(false);
                        if (clearState) {
                            this.connection.destroyChannels();
                        }
                        return [4 /*yield*/, this.invokeOnDisconnect()];
                    case 2:
                        _f.sent();
                        _c = (_b = Logger_1.Logger.getInstance()).info;
                        _d = "Relay connection to host ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 3:
                        _e = _d + (_f.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 4:
                        _c.apply(_b, [_e + (_f.sent()) + " disconnected"]);
                        return [3 /*break*/, 6];
                    case 5:
                        this.setIsDisconnecting(false);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.disconnectUnexpected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getSocket().disconnect();
                return [2 /*return*/];
            });
        });
    };
    ConnectionManager.prototype.getSocket = function () {
        return this.socket;
    };
    ConnectionManager.prototype.hasSocket = function () {
        return Boolean(this.socket);
    };
    ConnectionManager.prototype.setSocket = function (socket) {
        this.socket = socket;
    };
    ConnectionManager.prototype.clearSocket = function () {
        this.setSocket(null);
    };
    ConnectionManager.prototype.getListeners = function () {
        return this.listeners;
    };
    ConnectionManager.prototype.isConnecting = function () {
        return this.connecting;
    };
    ConnectionManager.prototype.setIsConnecting = function (connecting) {
        this.connecting = connecting;
    };
    ConnectionManager.prototype.createQueryStruct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var struct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        struct = {};
                        return [4 /*yield*/, this.connection.getQueryParameters()];
                    case 1:
                        (_a.sent()).forEach(function (parameter) {
                            struct[parameter.getName()] = parameter.getValue();
                        });
                        return [2 /*return*/, struct];
                }
            });
        });
    };
    ConnectionManager.prototype.getSocketUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, host, proxyHost, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.connection.isProxied()) return [3 /*break*/, 3];
                        host = this.host;
                        return [4 /*yield*/, host.getProxy()];
                    case 1:
                        proxyHost = _b.sent();
                        if (!proxyHost) return [3 /*break*/, 3];
                        return [4 /*yield*/, proxyHost.getSocketUri()];
                    case 2:
                        uri = _b.sent();
                        _b.label = 3;
                    case 3:
                        _a = uri;
                        if (_a) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.host.getSocketUri()];
                    case 4:
                        _a = (_b.sent());
                        _b.label = 5;
                    case 5: return [2 /*return*/, _a];
                }
            });
        });
    };
    ConnectionManager.prototype.onConnect = function (callback) {
        if (this.isConnected()) {
            callback({ persisted: true });
        }
        return this.getListeners().add('onConnect', function () {
            callback({ persisted: false });
        });
    };
    ConnectionManager.prototype.invokeOnConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getListeners().get('onConnect').invoke()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.onFailedConnection = function (callback) {
        return this.getListeners().add('onFailedConnection', function () {
            callback({ persisted: false });
        });
    };
    ConnectionManager.prototype.invokeOnFailedConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getListeners().get('onFailedConnection').invoke()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.onDisconnect = function (callback) {
        if (!this.isConnected()) {
            callback({ persisted: true });
        }
        return this.getListeners().add('onDisconnect', function () {
            callback({ persisted: false });
        });
    };
    ConnectionManager.prototype.invokeOnDisconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getListeners().get('onDisconnect').invoke()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.onUnexpectedDisconnect = function (callback) {
        return this.getListeners().add('onUnexpectedDisconnect', callback);
    };
    ConnectionManager.prototype.invokeOnUnexpectedDisconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getListeners().get('onUnexpectedDisconnect').invoke()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ConnectionManager;
}());
exports.ConnectionManager = ConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9tYW5hZ2VyL0Nvbm5lY3Rpb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE4QztBQUU5QyxpREFBbUQ7QUFFbkQsNkVBQTRFO0FBRTVFLG1EQUFrRDtBQUNsRCxtREFBa0Q7QUFPbEQsK0VBQXlEO0FBQ3pELG1GQUE2RDtBQUM3RCwyRkFBK0Y7QUFJL0Y7SUFVSSwyQkFBYSxJQUFXLEVBQUUsVUFBc0I7UUFBaEQsaUJBS0M7UUFWTyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBOFd0QiwrQkFBMEIsR0FBRzs7Ozs7d0JBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFHOzRCQUVoRCxzRUFBc0U7NEJBRXRFLHNCQUFPO3lCQUVWO3dCQUVELEtBQUEsQ0FBQSxLQUFBLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQTs7d0JBQXFDLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUE7O21DQUE3QixTQUE2Qjt3QkFBTSxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFBOzt3QkFBaEksY0FBMEIsTUFBdUUsU0FBK0IsQ0FBRyxFQUFDLENBQUM7NkJBRWpJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsd0JBQWtCO3dCQUVsQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDO2dDQUVsQixVQUFVLEVB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