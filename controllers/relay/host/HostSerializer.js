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
exports.HostSerializer = void 0;
var HostSerializer = /** @class */ (function () {
    function HostSerializer() {
    }
    HostSerializer.serialize = function (host) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, host.getHostname()];
                    case 1:
                        _a.hostname = _b.sent();
                        return [4 /*yield*/, host.getSocketPort()];
                    case 2:
                        _a.socketPort = _b.sent();
                        return [4 /*yield*/, host.socketIsSecure()];
                    case 3:
                        _a.socketIsSecure = _b.sent();
                        return [4 /*yield*/, host.getSocketUri()];
                    case 4: return [2 /*return*/, (_a.socketUri = (_b.sent()).toString(),
                            _a)];
                }
            });
        });
    };
    return HostSerializer;
}());
exports.HostSerializer = HostSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9zdFNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvaG9zdC9Ib3N0U2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtJQUFBO0lBZUEsQ0FBQztJQWJnQix3QkFBUyxHQUF0QixVQUF3QixJQUFXOzs7Ozs7O3dCQUlqQixxQkFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUFsQyxXQUFRLEdBQUUsU0FBd0I7d0JBQ3RCLHFCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBQTs7d0JBQXRDLGFBQVUsR0FBRSxTQUEwQjt3QkFDdEIscUJBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBM0MsaUJBQWMsR0FBRSxTQUEyQjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzRCQUwxQyx1QkFLSSxZQUFTLEdBQUUsQ0FBRSxTQUF5QixDQUFFLENBQUMsUUFBUSxFQUFFO2lDQUVyRDs7OztLQUVMO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLHdDQUFjIn0=