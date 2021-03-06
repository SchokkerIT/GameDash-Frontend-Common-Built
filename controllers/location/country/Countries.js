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
exports.Countries = void 0;
var Country_1 = require("./Country");
var Countries = /** @class */ (function () {
    function Countries() {
    }
    Countries.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Countries.getProvider().getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Countries.get = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, country;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0;
                        return [4 /*yield*/, Countries.getAll()];
                    case 1:
                        _a = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        country = _a[_i];
                        if (country.getCode() === code) {
                            return [2 /*return*/, country];
                        }
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    Countries.create = function (code, name) {
        return new Country_1.Country(code, name);
    };
    Countries.getProvider = function () {
        return Countries.provider;
    };
    Countries.setProvider = function (provider) {
        Countries.provider = provider;
    };
    return Countries;
}());
exports.Countries = Countries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2xvY2F0aW9uL2NvdW50cnkvQ291bnRyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUdwQztJQUFBO0lBNENBLENBQUM7SUF4Q2EsZ0JBQU0sR0FBbkI7Ozs7NEJBRVEscUJBQU0sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFBOzRCQUE3QyxzQkFBTyxTQUFzQyxFQUFDOzs7O0tBRTlDO0lBRVksYUFBRyxHQUFoQixVQUFrQixJQUFZOzs7Ozs7OEJBRWU7d0JBQXhCLHFCQUFNLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQXhCLEtBQUEsU0FBd0I7Ozs2QkFBeEIsQ0FBQSxjQUF3QixDQUFBO3dCQUFuQyxPQUFPO3dCQUVmLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRzs0QkFFaEMsc0JBQU8sT0FBTyxFQUFDO3lCQUVmOzs7d0JBTmtCLElBQXdCLENBQUE7OzRCQVU1QyxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FFWjtJQUVNLGdCQUFNLEdBQWIsVUFBZSxJQUFZLEVBQUUsSUFBWTtRQUV4QyxPQUFPLElBQUksaUJBQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVNLHFCQUFXLEdBQWxCO1FBRUMsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBRTNCLENBQUM7SUFFTSxxQkFBVyxHQUFsQixVQUFvQixRQUEwQjtRQUU3QyxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUUvQixDQUFDO0lBRUYsZ0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLDhCQUFTIn0=