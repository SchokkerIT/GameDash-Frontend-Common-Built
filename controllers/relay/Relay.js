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
exports.Relay = void 0;
var CachedValue_1 = require("../cache/CachedValue");
var Connections_1 = require("./connection/Connections");
var Hosts_1 = require("./host/Hosts");
var Relay = /** @class */ (function () {
    function Relay() {
    }
    Relay.getPrimaryConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Relay.primaryConnection.handle(function () { return __awaiter(_this, void 0, void 0, function () {
                            var connection, _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = (_a = Relay).createConnection;
                                        return [4 /*yield*/, Hosts_1.Hosts.getPrimary()];
                                    case 1:
                                        connection = _b.apply(_a, [_c.sent()]);
                                        connection.setName('Primary');
                                        return [2 /*return*/, connection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Relay.createConnection = function (host) {
        return Connections_1.Connections.createRegistered(host);
    };
    Relay.primaryConnection = new CachedValue_1.CachedValue();
    return Relay;
}());
exports.Relay = Relay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvUmVsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTREO0FBQzVELHdEQUF1RTtBQUV2RSxzQ0FBcUM7QUFHckM7SUFBQTtJQTRCQSxDQUFDO0lBeEJhLDBCQUFvQixHQUFqQzs7Ozs7NEJBRVEscUJBQU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQzs7Ozs7d0NBRXhCLEtBQUEsQ0FBQSxLQUFBLEtBQUssQ0FBQSxDQUFDLGdCQUFnQixDQUFBO3dDQUV4QyxxQkFBTSxhQUFLLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dDQUZuQixVQUFVLEdBQUcsY0FFbEIsU0FBd0IsRUFFeEI7d0NBRUEsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3Q0FFL0Isc0JBQU8sVUFBVSxFQUFDOzs7NkJBRWxCLENBQUMsRUFBQTs0QkFaRixzQkFBTyxTQVlMLEVBQUM7Ozs7S0FFSDtJQUVNLHNCQUFnQixHQUF2QixVQUF5QixJQUFXO1FBRW5DLE9BQU8seUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUU3QyxDQUFDO0lBeEJjLHVCQUFpQixHQUFHLElBQUkseUJBQVcsRUFBYyxDQUFDO0lBMEJsRSxZQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksc0JBQUsifQ==