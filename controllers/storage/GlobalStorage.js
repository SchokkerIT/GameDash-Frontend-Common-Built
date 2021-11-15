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
exports.GlobalStorage = void 0;
var Storage_1 = require("./Storage");
var GlobalStorage = /** @class */ (function () {
    function GlobalStorage() {
    }
    GlobalStorage.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GlobalStorage.storage.get(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GlobalStorage.set = function (key, value, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GlobalStorage.storage.set(key, value, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GlobalStorage.delete = function (key, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GlobalStorage.storage.delete(key, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GlobalStorage.exists = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GlobalStorage.storage.exists(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GlobalStorage.getProvider = function () {
        return GlobalStorage.storage.getProvider();
    };
    GlobalStorage.setProvider = function (provider) {
        GlobalStorage.storage.setProvider(provider);
    };
    GlobalStorage.storage = new Storage_1.Storage();
    return GlobalStorage;
}());
exports.GlobalStorage = GlobalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9zdG9yYWdlL0dsb2JhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9DO0FBR3BDO0lBQUE7SUF3Q0EsQ0FBQztJQXBDYSxpQkFBRyxHQUFoQixVQUFrQixHQUFXOzs7OzRCQUVyQixxQkFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsRUFBQTs0QkFBN0Msc0JBQU8sU0FBc0MsRUFBQzs7OztLQUU5QztJQUVZLGlCQUFHLEdBQWhCLFVBQWtCLEdBQVcsRUFBRSxLQUFVLEVBQUUsT0FBaUI7UUFBakIsd0JBQUEsRUFBQSxZQUFpQjs7Ozs0QkFFM0QscUJBQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUUsRUFBQTs7d0JBQXRELFNBQXNELENBQUM7Ozs7O0tBRXZEO0lBRVksb0JBQU0sR0FBbkIsVUFBcUIsR0FBVyxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7Ozs7NEJBRWxELHFCQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLEdBQUcsRUFBRSxPQUFPLENBQUUsRUFBQTs7d0JBQWxELFNBQWtELENBQUM7Ozs7O0tBRW5EO0lBRVksb0JBQU0sR0FBbkIsVUFBcUIsR0FBVzs7Ozs0QkFFeEIscUJBQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFFLEVBQUE7NEJBQWhELHNCQUFPLFNBQXlDLEVBQUM7Ozs7S0FFakQ7SUFFTSx5QkFBVyxHQUFsQjtRQUVDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUU1QyxDQUFDO0lBRU0seUJBQVcsR0FBbEIsVUFBb0IsUUFBbUI7UUFFdEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUUsUUFBUSxDQUFFLENBQUM7SUFFL0MsQ0FBQztJQXBDdUIscUJBQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQXNDakQsb0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxzQ0FBYSJ9