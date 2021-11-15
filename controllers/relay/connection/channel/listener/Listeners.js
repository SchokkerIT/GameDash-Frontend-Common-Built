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
var Mutex_1 = require("controllers/mutex/Mutex");
var Logger_1 = require("controllers/logger/Logger");
var Json_1 = require("controllers/json/Json");
var Listeners_1 = require("controllers/listener/Listeners");
var MessageDecoder_1 = require("controllers/relay/payload/message/MessageDecoder");
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
}(Listeners_1.Listeners.NonStatic));
exports.Listeners = Listeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGVuZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3JlbGF5L2Nvbm5lY3Rpb24vY2hhbm5lbC9saXN0ZW5lci9MaXN0ZW5lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWdEO0FBQ2hELG9EQUFtRDtBQUNuRCw4Q0FBNkM7QUFDN0MsNERBQTRFO0FBRzVFLG1GQUFrRjtBQUtsRjtJQUErQiw2QkFBdUI7SUFPckQsbUJBQWEsVUFBc0IsRUFBRSxPQUFnQjtRQUFyRCxZQUVDLGlCQUFPLFNBT1A7UUFYTyx5QkFBbUIsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBMkZsQyxpQ0FBMkIsR0FBRyxVQUFRLE9BQXdCOzs7Ozt3QkFFckUsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRzs0QkFFbkUsc0JBQU87eUJBRVA7d0JBRUssZ0JBQWdCLEdBQUcsQ0FFeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUVoQiwrQkFBYyxDQUFDLE1BQU0sQ0FBRSxPQUFPLENBQUMsT0FBTyxDQUFFOzRCQUV4QyxDQUFDO2dDQUVELElBQUksQ0FFTCxDQUFDO3dCQUVGLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUUsQ0FBQzt3QkFFaEUscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztnQ0FFakIsSUFBSSxDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUMsTUFBTSxDQUFFLGdCQUFnQixDQUFFO2dDQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxPQUFPLENBQUMsSUFBSSxFQUFFLGdC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