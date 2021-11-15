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
exports.FlagManager = void 0;
var DefaultFlagProvider_1 = require("./DefaultFlagProvider");
var Exception_1 = __importDefault(require("exceptions/Exception"));
var FlagManager = /** @class */ (function () {
    function FlagManager(country) {
        this.country = country;
    }
    FlagManager.prototype.getImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var image, url;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    image = new Image();
                                    image.onload = function () { return resolve(image); };
                                    image.onerror = function () { return reject(new Exception_1.default("Could not load image on URL " + image.src)); };
                                    return [4 /*yield*/, FlagManager.getFlagProvider().getUrl(this.country)];
                                case 1:
                                    url = _a.sent();
                                    image.src = url.toString();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    FlagManager.getFlagProvider = function () {
        return FlagManager.flagProvider;
    };
    FlagManager.setFlagProvider = function (provider) {
        FlagManager.flagProvider = provider;
    };
    FlagManager.flagProvider = new DefaultFlagProvider_1.DefaultFlagProvider();
    return FlagManager;
}());
exports.FlagManager = FlagManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhZ01hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvbG9jYXRpb24vY291bnRyeS9mbGFnL0ZsYWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUE0RDtBQUU1RCxtRUFBNkM7QUFFN0M7SUFNSSxxQkFBYSxPQUFnQjtRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUUzQixDQUFDO0lBRUssOEJBQVEsR0FBZDs7OztnQkFFSSxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7OztvQ0FFL0IsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7b0NBRTFCLEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBWSxPQUFBLE9BQU8sQ0FBRSxLQUFLLENBQUUsRUFBaEIsQ0FBZ0IsQ0FBQztvQ0FDNUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFZLE9BQUEsTUFBTSxDQUFFLElBQUksbUJBQVMsQ0FBQyxpQ0FBZ0MsS0FBSyxDQUFDLEdBQU0sQ0FBQyxDQUFFLEVBQXJFLENBQXFFLENBQUM7b0NBRXRGLHFCQUFNLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxFQUFBOztvQ0FBaEUsR0FBRyxHQUFHLFNBQTBEO29DQUV0RSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozt5QkFFOUIsQ0FBQyxFQUFDOzs7S0FFTjtJQUVNLDJCQUFlLEdBQXRCO1FBRUksT0FBTyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBRXBDLENBQUM7SUFFTSwyQkFBZSxHQUF0QixVQUF3QixRQUFzQjtRQUUxQyxXQUFXLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUV4QyxDQUFDO0lBckNjLHdCQUFZLEdBQWlCLElBQUkseUNBQW1CLEVBQUUsQ0FBQztJQXVDMUUsa0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxrQ0FBVyJ9