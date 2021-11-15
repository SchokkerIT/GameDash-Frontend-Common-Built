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
exports.Hosts = void 0;
var Hosts = /** @class */ (function () {
    function Hosts() {
    }
    Hosts.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Hosts.getProvider().getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Hosts.getPrimary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hosts, _i, hosts_1, host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Hosts.getAll()];
                    case 1:
                        hosts = _a.sent();
                        _i = 0, hosts_1 = hosts;
                        _a.label = 2;
                    case 2:
                        if (!(_i < hosts_1.length)) return [3 /*break*/, 5];
                        host = hosts_1[_i];
                        return [4 /*yield*/, host.isPrimary()];
                    case 3:
                        if (_a.sent()) {
                            return [2 /*return*/, host];
                        }
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, hosts.length ? hosts[0] : null];
                }
            });
        });
    };
    Hosts.getProvider = function () {
        return Hosts.provider;
    };
    Hosts.setProvider = function (provider) {
        Hosts.provider = provider;
    };
    return Hosts;
}());
exports.Hosts = Hosts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvaG9zdC9Ib3N0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBd0NBLENBQUM7SUFwQ2dCLFlBQU0sR0FBbkI7Ozs7NEJBRVcscUJBQU0sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFBOzRCQUF6QyxzQkFBTyxTQUFrQyxFQUFDOzs7O0tBRTdDO0lBRVksZ0JBQVUsR0FBdkI7Ozs7OzRCQUVrQixxQkFBTSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE1QixLQUFLLEdBQUcsU0FBb0I7OEJBRVosRUFBTCxlQUFLOzs7NkJBQUwsQ0FBQSxtQkFBSyxDQUFBO3dCQUFiLElBQUk7d0JBRUwscUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBMUIsSUFBSSxTQUFzQixFQUFHOzRCQUV6QixzQkFBTyxJQUFJLEVBQUM7eUJBRWY7Ozt3QkFOWSxJQUFLLENBQUE7OzRCQVV0QixzQkFBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQzs7OztLQUV6QztJQUVNLGlCQUFXLEdBQWxCO1FBRUksT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBRTFCLENBQUM7SUFFTSxpQkFBVyxHQUFsQixVQUFvQixRQUF1QjtRQUV2QyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUU5QixDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksc0JBQUsifQ==