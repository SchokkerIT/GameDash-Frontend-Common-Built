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
                            this.invokeOnDisconnect(),
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
            var wrapper, _a, _b, _c, _d, _e, _f, _g, _h;
            var _this = this;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (this.isConnected()) {
                            throw new ConnectionException_1.default('Already connected to the relay server');
                        }
                        this.setIsConnecting(false);
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, , 8, 9]);
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
                        _b = (_a = Logger_1.Logger.getInstance()).info;
                        _c = "Connecting to relay ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 2:
                        _d = _c + (_j.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 3:
                        _b.apply(_a, [_d + (_j.sent()) + "..."]);
                        return [4 /*yield*/, wrapper.attempt()];
                    case 4:
                        _j.sent();
                        _f = (_e = Logger_1.Logger.getInstance()).info;
                        _g = "Connected to relay ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 5:
                        _h = _g + (_j.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 6:
                        _f.apply(_e, [_h + (_j.sent())]);
                        return [4 /*yield*/, this.connectToSubscribedChannels()];
                    case 7:
                        _j.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        this.setIsConnecting(false);
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
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
                    case 2: return [4 /*yield*/, this.connect()];
                    case 3:
                        _e.sent();
                        _b = (_a = Logger_1.Logger.getInstance()).info;
                        _c = "Reconnected to ";
                        return [4 /*yield*/, this.host.getHostname()];
                    case 4:
                        _d = _c + (_e.sent()) + ":";
                        return [4 /*yield*/, this.host.getSocketPort()];
                    case 5:
                        _b.apply(_a, [_d + (_e.sent())]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.connectToSubscribedChannels = function (options) {
        if (options === void 0) { options = {
            forceChannelConnectAttempt: true
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var forceChannelConnectAttempt, channels, channelCollection, channelNames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        forceChannelConnectAttempt = options.forceChannelConnectAttempt;
                        channels = this.connection.getChannels().getAll();
                        channelCollection = ChannelCollection_1.ChannelCollection.create(channels.filter(function (channel) { return (channel.getSubscriptionIntent()); }));
                        channelNames = channelCollection.getChannels().map(function (channel) { return channel.getName(); });
                        if (forceChannelConnectAttempt) {
                            //force a channel connection attempt by clearing the cache of all channels
                            Logger_1.Logger.getInstance().info("Forcing channel connection for " + channelNames.join(', ') + "...");
                            channelCollection.clearCache();
                        }
                        if (!(channelCollection.countChannels() > 0)) return [3 /*break*/, 2];
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
            var _a, clearState;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = options.clearState, clearState = _a === void 0 ? true : _a;
                        if (!this.isConnected()) {
                            throw new Error('Not currently connected');
                        }
                        this.setIsDisconnecting(true);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 3, 4]);
                        this.getSocket().disconnect();
                        this.clearSocket();
                        this.setIsConnected(false);
                        if (clearState) {
                            this.connection.destroyChannels();
                        }
                        return [4 /*yield*/, this.invokeOnDisconnect()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setIsDisconnecting(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
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
            callback();
        }
        return this.getListeners().add('onConnect', callback);
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
        return this.getListeners().add('onFailedConnection', callback);
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
        return this.getListeners().add('onDisconnect', callback);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9tYW5hZ2VyL0Nvbm5lY3Rpb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE4QztBQUU5QyxpREFBbUQ7QUFFbkQsNkVBQTRFO0FBRTVFLG1EQUFrRDtBQUNsRCxtREFBa0Q7QUFNbEQsK0VBQXlEO0FBTXpEO0lBVUksMkJBQWEsSUFBVyxFQUFFLFVBQXNCO1FBQWhELGlCQUtDO1FBVk8sZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQStWdEIsK0JBQTBCLEdBQUc7Ozs7O3dCQUVqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRzs0QkFFaEQsc0VBQXNFOzRCQUV0RSxzQkFBTzt5QkFFVjt3QkFFRCxLQUFBLENBQUEsS0FBQSxlQUFNLENBQUMsV0FBVyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUE7O3dCQUFxQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzttQ0FBN0IsU0FBNkI7d0JBQU0scUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBQTs7d0JBQWhJLGNBQTBCLE1BQXVFLFNBQStCLENBQUcsRUFBQyxDQUFDOzZCQUVqSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLHdCQUFrQjt3QkFFbEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQ0FFbEIsVUFBVSxFQUFFLEtBQUs7NkJBRXBCLENBQUMsRUFBQTs7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