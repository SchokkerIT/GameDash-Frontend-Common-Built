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
exports.Mutex = void 0;
var AsyncMutexProvider_1 = require("./providers/AsyncMutexProvider");
var NullProvider_1 = require("./providers/NullProvider");
var RunExclusiveProvider_1 = require("./providers/RunExclusiveProvider");
var Mutex = /** @class */ (function () {
    function Mutex() {
    }
    Mutex.prototype.acquire = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = this.getProvider();
                        return [4 /*yield*/, provider.acquire()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mutex.prototype.release = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = this.getProvider();
                        return [4 /*yield*/, provider.release()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Mutex.prototype.runExclusive = function (func) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = this.getProvider();
                        return [4 /*yield*/, provider.runExclusive(func)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mutex.prototype.isLocked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = this.getProvider();
                        return [4 /*yield*/, provider.isLocked()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mutex.prototype.getProvider = function () {
        if (!this.provider) {
            this.provider = Mutex.getDefaultProvider();
        }
        return this.provider;
    };
    Mutex.prototype.setProvider = function (provider) {
        this.provider = provider;
    };
    Mutex.getDefaultProvider = function () {
        return new (Mutex.getRegisteredProvider(Mutex.defaultProvider))();
    };
    Mutex.setDefaultProvider = function (name) {
        Mutex.defaultProvider = name;
    };
    Mutex.getRegisteredProvider = function (name) {
        return Mutex.registeredProviders[name];
    };
    Mutex.registerProvider = function (name, provider) {
        Mutex.registeredProviders[name] = provider;
    };
    Mutex.registeredProviders = {
        AsyncMutex: AsyncMutexProvider_1.AsyncMutexProvider,
        Null: NullProvider_1.NullProvider,
        RunExclusive: RunExclusiveProvider_1.RunExclusiveProvider
    };
    return Mutex;
}());
exports.Mutex = Mutex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXV0ZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvbXV0ZXgvTXV0ZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RCx5RUFBd0U7QUFHeEU7SUFBQTtJQTJGQSxDQUFDO0lBOUVTLHVCQUFPLEdBQWI7Ozs7Ozt3QkFFVSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUU3QixxQkFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUE7NEJBQS9CLHNCQUFPLFNBQXdCLEVBQUM7Ozs7S0FFbkM7SUFFSyx1QkFBTyxHQUFiOzs7Ozs7d0JBRVUsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFFcEMscUJBQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBeEIsU0FBd0IsQ0FBQzs7Ozs7S0FFNUI7SUFFSyw0QkFBWSxHQUFsQixVQUVJLElBQTRCOzs7Ozs7d0JBSXRCLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBRTdCLHFCQUFNLFFBQVEsQ0FBQyxZQUFZLENBQUssSUFBSSxDQUFFLEVBQUE7NEJBQTdDLHNCQUFPLFNBQXNDLEVBQUM7Ozs7S0FFakQ7SUFFSyx3QkFBUSxHQUFkOzs7Ozs7d0JBRVUsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFFN0IscUJBQU0sUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFBOzRCQUFoQyxzQkFBTyxTQUF5QixFQUFDOzs7O0tBRXBDO0lBRUQsMkJBQVcsR0FBWDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFHO1lBRWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FFOUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFekIsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBYSxRQUFtQjtRQUU1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUU3QixDQUFDO0lBRU0sd0JBQWtCLEdBQXpCO1FBRUksT0FBTyxJQUFJLENBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFFLEtBQUssQ0FBQyxlQUFlLENBQUUsQ0FBRSxFQUFFLENBQUM7SUFFMUUsQ0FBQztJQUVNLHdCQUFrQixHQUF6QixVQUEyQixJQUFZO1FBRW5DLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRWpDLENBQUM7SUFFTSwyQkFBcUIsR0FBNUIsVUFBOEIsSUFBWTtRQUV0QyxPQUFPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUU3QyxDQUFDO0lBRU0sc0JBQWdCLEdBQXZCLFVBQXlCLElBQVksRUFBRSxRQUFRO1FBRTNDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBRSxJQUFJLENBQUUsR0FBRyxRQUFRLENBQUM7SUFFakQsQ0FBQztJQXRGYyx5QkFBbUIsR0FBRztRQUVqQyxVQUFVLEVBQUUsdUNBQWtCO1FBQzlCLElBQUksRUFBRSwyQkFBWTtRQUNsQixZQUFZLEVBQUUsMkNBQW9CO0tBRXJDLENBQUM7SUFrRk4sWUFBQztDQUFBLEFBM0ZELElBMkZDO0FBM0ZZLHNCQUFLIn0=