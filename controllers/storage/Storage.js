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
exports.Storage = void 0;
var StorageException_1 = __importDefault(require("./StorageException"));
var Storage = /** @class */ (function () {
    function Storage(provider) {
        if (provider === void 0) { provider = undefined; }
        if (provider) {
            this.provider = provider;
        }
    }
    Storage.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().get(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Storage.prototype.set = function (key, value, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().set(key, value, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Storage.prototype.delete = function (key, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().delete(key, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Storage.prototype.exists = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().exists(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Storage.prototype.hasExpired = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().hasExpired(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Storage.prototype.getTimeLastModified = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().getTimeLastModified(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Storage.prototype.getProvider = function () {
        if (!this.provider) {
            var defaultProvider = Storage.getDefaultProvider();
            if (!defaultProvider) {
                throw new StorageException_1.default('No provider defined');
            }
            return defaultProvider;
        }
        return this.provider;
    };
    Storage.prototype.setProvider = function (provider) {
        this.provider = provider;
    };
    Storage.getDefaultProvider = function () {
        return Storage.defaultProvider;
    };
    Storage.setDefaultProvider = function (provider) {
        Storage.defaultProvider = provider;
    };
    return Storage;
}());
exports.Storage = Storage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9zdG9yYWdlL1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Esd0VBQWtEO0FBSWxEO0lBTUksaUJBQWEsUUFBK0I7UUFBL0IseUJBQUEsRUFBQSxvQkFBK0I7UUFFeEMsSUFBSSxRQUFRLEVBQUc7WUFFWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUU1QjtJQUVMLENBQUM7SUFFSyxxQkFBRyxHQUFULFVBQVcsR0FBVzs7Ozs0QkFFWCxxQkFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxFQUFBOzRCQUExQyxzQkFBTyxTQUFtQyxFQUFDOzs7O0tBRTlDO0lBRUsscUJBQUcsR0FBVCxVQUVJLEdBQVcsRUFDWCxLQUFVLEVBQ1YsT0FBeUI7UUFBekIsd0JBQUEsRUFBQSxZQUF5Qjs7Ozs0QkFJekIscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBRSxFQUFBOzt3QkFBbkQsU0FBbUQsQ0FBQzs7Ozs7S0FFdkQ7SUFFSyx3QkFBTSxHQUFaLFVBQWMsR0FBVyxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7Ozs7NEJBRXhDLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBRSxFQUFBOzt3QkFBL0MsU0FBK0MsQ0FBQzs7Ozs7S0FFbkQ7SUFFSyx3QkFBTSxHQUFaLFVBQWMsR0FBVzs7Ozs0QkFFZCxxQkFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBRSxFQUFBOzRCQUE3QyxzQkFBTyxTQUFzQyxFQUFDOzs7O0tBRWpEO0lBRUssNEJBQVUsR0FBaEIsVUFBa0IsR0FBVzs7Ozs0QkFFbEIscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBRSxHQUFHLENBQUUsRUFBQTs0QkFBakQsc0JBQU8sU0FBMEMsRUFBQzs7OztLQUVyRDtJQUVLLHFDQUFtQixHQUF6QixVQUEyQixHQUFXOzs7OzRCQUUzQixxQkFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUUsR0FBRyxDQUFFLEVBQUE7NEJBQTFELHNCQUFPLFNBQW1ELEVBQUM7Ozs7S0FFOUQ7SUFFRCw2QkFBVyxHQUFYO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUc7WUFFakIsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLGVBQWUsRUFBRztnQkFFbkIsTUFBTSxJQUFJLDBCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFFckQ7WUFFRCxPQUFPLGVBQWUsQ0FBQztTQUUxQjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUV6QixDQUFDO0lBRUQsNkJBQVcsR0FBWCxVQUFhLFFBQW1CO1FBRTVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBRTdCLENBQUM7SUFFTSwwQkFBa0IsR0FBekI7UUFFSSxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFFbkMsQ0FBQztJQUVNLDBCQUFrQixHQUF6QixVQUEyQixRQUFtQjtRQUUxQyxPQUFPLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztJQUV2QyxDQUFDO0lBRUwsY0FBQztBQUFELENBQUMsQUFoR0QsSUFnR0M7QUFoR1ksMEJBQU8ifQ==