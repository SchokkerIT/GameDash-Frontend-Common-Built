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
var PromiseUtil = /** @class */ (function () {
    function PromiseUtil() {
    }
    PromiseUtil.allWithProgress = function (promises, callback, options) {
        if (options === void 0) { options = {
            mode: 'allSettled'
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var progressResults, current, wrappedPromises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        progressResults = [];
                        current = 0;
                        wrappedPromises = promises.map(function (promise) { return __awaiter(_this, void 0, void 0, function () {
                            var error, e_1, progressResult;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, promise];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        e_1 = _a.sent();
                                        error = e_1;
                                        return [3 /*break*/, 3];
                                    case 3:
                                        current++;
                                        progressResult = {
                                            current: current,
                                            steps: promises.length,
                                            percentage: current / promises.length * 100,
                                            error: error
                                        };
                                        progressResults.push(progressResult);
                                        callback(progressResult);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        if (!(options.mode === 'allSettled')) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.allSettled(wrappedPromises)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Promise.all(wrappedPromises)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, progressResults];
                }
            });
        });
    };
    return PromiseUtil;
}());
exports.default = PromiseUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWlzZVV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9Qcm9taXNlVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0lBQUE7SUFxRUEsQ0FBQztJQW5FZ0IsMkJBQWUsR0FBNUIsVUFFSSxRQUF3QixFQUN4QixRQUEyRCxFQUMzRCxPQVFDO1FBUkQsd0JBQUEsRUFBQTtZQU1JLElBQUksRUFBRSxZQUFZO1NBRXJCOzs7Ozs7O3dCQUlLLGVBQWUsR0FBZ0IsRUFBRSxDQUFDO3dCQUVwQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO3dCQUVWLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVEsT0FBTzs7Ozs7O3dDQU01QyxxQkFBTSxPQUFPLEVBQUE7O3dDQUFiLFNBQWEsQ0FBQzs7Ozt3Q0FLZCxLQUFLLEdBQUcsR0FBQyxDQUFDOzs7d0NBSWQsT0FBTyxFQUFFLENBQUM7d0NBRUosY0FBYyxHQUFjOzRDQUU5QixPQUFPLFNBQUE7NENBQ1AsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNOzRDQUN0QixVQUFVLEVBQUUsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRzs0Q0FDM0MsS0FBSyxPQUFBO3lDQUVSLENBQUM7d0NBRUYsZUFBZSxDQUFDLElBQUksQ0FBRSxjQUFjLENBQUUsQ0FBQzt3Q0FFdkMsUUFBUSxDQUFFLGNBQWMsQ0FBRSxDQUFDOzs7OzZCQUU5QixDQUFDLENBQUM7NkJBRUMsQ0FBQSxPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQSxFQUE3Qix3QkFBNkI7d0JBRTdCLHFCQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUUsZUFBZSxDQUFFLEVBQUE7O3dCQUEzQyxTQUEyQyxDQUFDOzs0QkFLNUMscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBRSxlQUFlLENBQUUsRUFBQTs7d0JBQXBDLFNBQW9DLENBQUM7OzRCQUl6QyxzQkFBTyxlQUFlLEVBQUM7Ozs7S0FFMUI7SUFFTCxrQkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUMifQ==