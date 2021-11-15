"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Listeners = void 0;
var Mutex_1 = require("../../../../mutex/Mutex");
var Logger_1 = require("../../../../logger/Logger");
var Json_1 = require("../../../../json/Json");
var Listeners_1 = require("../../../../listener/nonStatic/Listeners");
var MessageDecoder_1 = require("../../../payload/message/MessageDecoder");
var Listeners = /** @class */ (function (_super) {
    __extends(Listeners, _super);
    function Listeners(connection, channel) {
        var _this = _super.call(this) || this;
        _this.socketListenerMutex = new Mutex_1.Mutex();
        _this.handleIncomingSocketMessage = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var formattedMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (payload.channel && payload.channel !== this.channel.getName()) {
                            return [2 /*return*/];
                        }
                        formattedMessage = (payload.message ?
                            MessageDecoder_1.MessageDecoder.decode(payload.message)
                            :
                                null);
                        Listeners.logIncomingSocketMessage(payload, formattedMessage);
                        return [4 /*yield*/, Promise.all([
                                this.get(payload.type).invoke(formattedMessage),
                                this.get('message').invoke(payload.type, formattedMessage)
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.connection = connection;
        _this.channel = channel;
        _this.listen();
        return _this;
    }
    Listeners.prototype.listen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isListeningToSocket()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.listenToSocket()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Listeners.prototype.destroy = function () {
        if (this.isListeningToSocket()) {
            this.destroySocketListener();
        }
    };
    Listeners.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isListeningToSocket()) {
                            this.destroy();
                            this.setIsListeningToSocket(false);
                        }
                        return [4 /*yield*/, this.listen()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Listeners.prototype.onMessage = function (callback) {
        return this.add('message', callback);
    };
    Listeners.prototype.listenToSocket = function () {
        var _this = this;
        return this.socketListenerMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isListeningToSocket()) {
                            return [2 /*return*/];
                        }
                        if (!!this.connection.isConnected()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connection.awaitConnected()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.connection.getSocket().on('message', this.handleIncomingSocketMessage);
                        this.setIsListeningToSocket(true);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Listeners.prototype.destroySocketListener = function () {
        var socket = this.connection.getSocket();
        if (socket) {
            socket.off('message', this.handleIncomingSocketMessage);
        }
        this.setIsListeningToSocket(false);
    };
    Listeners.prototype.isListeningToSocket = function () {
        return this.listeningToSocket;
    };
    Listeners.prototype.setIsListeningToSocket = function (isListening) {
        this.listeningToSocket = isListening;
    };
    Listeners.logIncomingSocketMessage = function (payload, message) {
        var loggableMessage = Listeners.makePayloadMessageLoggable(message);
        Logger_1.Logger.getInstance().message("Registered incoming message " + (loggableMessage != null ? loggableMessage : 'N/A') + " on channel " + payload.channel + " with type " + payload.type, 'relay');
    };
    Listeners.makePayloadMessageLoggable = function (message) {
        if (message == null) {
            return null;
        }
        if (typeof message === 'string') {
            return message;
        }
        return Json_1.Json.encode(message);
    };
    return Listeners;
}(Listeners_1.Listeners));
exports.Listeners = Listeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGVuZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3JlbGF5L2Nvbm5lY3Rpb24vY2hhbm5lbC9saXN0ZW5lci9MaXN0ZW5lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWdEO0FBQ2hELG9EQUFtRDtBQUNuRCw4Q0FBNkM7QUFDN0Msc0VBQXNGO0FBR3RGLDBFQUFrRjtBQUtsRjtJQUErQiw2QkFBYTtJQU8zQyxtQkFBYSxVQUFzQixFQUFFLE9BQWdCO1FBQXJELFlBRUMsaUJBQU8sU0FPUDtRQVhPLHlCQUFtQixHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUEyRmxDLGlDQUEyQixHQUFHLFVBQVEsT0FBd0I7Ozs7O3dCQUVyRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFHOzRCQUVuRSxzQkFBTzt5QkFFUDt3QkFFSyxnQkFBZ0IsR0FBRyxDQUV4QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBRWhCLCtCQUFjLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUU7NEJBRXhDLENBQUM7Z0NBRUQsSUFBSSxDQUVMLENBQUM7d0JBRUYsU0FBUyxDQUFDLHdCQUF3QixDQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBRSxDQUFDO3dCQUVoRSxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dDQUVqQixJQUFJLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQyxNQUFNLENBQUUsZ0JBQWdCLENBQUU7Z0NBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZ0JB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