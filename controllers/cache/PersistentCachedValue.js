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
exports.PersistentCachedValue = void 0;
var Time_1 = require("../time/Time");
var Storage_1 = require("../storage/Storage");
var Mutex_1 = require("../mutex/Mutex");
var Implementations_1 = require("./Implementations");
var PersistentCachedValue = /** @class */ (function () {
    function PersistentCachedValue(storageKey, options) {
        if (options === void 0) { options = {}; }
        this.handleMutex = new Mutex_1.Mutex();
        this.storage = new Storage_1.Storage();
        Implementations_1.Implementations.add(this);
        this.storageKey = storageKey;
        var timeout = options.timeout;
        if (timeout) {
            this.setTimeout(timeout);
        }
    }
    PersistentCachedValue.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(this.storageKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PersistentCachedValue.prototype.setValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set(this.storageKey, value, {
                            timeExpiry: Time_1.Time.fromUnixTimestamp(Time_1.Time.now().getUnixTimestamp() + this.getTimeout())
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PersistentCachedValue.prototype.isCached = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storage.exists(this.storageKey)];
                    case 1:
                        _a = (_b.sent());
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.hasExpired(this.storageKey)];
                    case 2:
                        _a = !(_b.sent());
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    PersistentCachedValue.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.delete(this.storageKey)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PersistentCachedValue.prototype.handle = function (fetch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            var value;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.isCached()];
                                    case 1:
                                        if (!!(_a.sent())) return [3 /*break*/, 4];
                                        return [4 /*yield*/, fetch()];
                                    case 2:
                                        value = _a.sent();
                                        return [4 /*yield*/, this.setValue(value)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, value];
                                    case 4: return [2 /*return*/, this.getValue()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PersistentCachedValue.prototype.getTimeout = function () {
        return this.timeout;
    };
    PersistentCachedValue.prototype.setTimeout = function (timeout) {
        this.timeout = timeout;
    };
    return PersistentCachedValue;
}());
exports.PersistentCachedValue = PersistentCachedValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudENhY2hlZFZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NhY2hlL1BlcnNpc3RlbnRDYWNoZWRWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNkM7QUFDN0MsOENBQXNEO0FBQ3RELHdDQUFnRDtBQUNoRCxxREFBb0Q7QUFHcEQ7SUFPSSwrQkFFSSxVQUFrQixFQUNsQixPQUlNO1FBSk4sd0JBQUEsRUFBQSxZQUlNO1FBWk8sZ0JBQVcsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRTFCLFlBQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQWNyQyxpQ0FBZSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUVyQixJQUFBLE9BQU8sR0FBSyxPQUFPLFFBQVosQ0FBYTtRQUU1QixJQUFJLE9BQU8sRUFBRztZQUVWLElBQUksQ0FBQyxVQUFVLENBQUUsT0FBTyxDQUFFLENBQUM7U0FFOUI7SUFFTCxDQUFDO0lBRUssd0NBQVEsR0FBZDs7Ozs0QkFFVyxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLEVBQUE7NEJBQWhELHNCQUFPLFNBQXlDLEVBQUM7Ozs7S0FFcEQ7SUFFSyx3Q0FBUSxHQUFkLFVBQWdCLEtBQVE7Ozs7NEJBRXBCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFOzRCQUUzQyxVQUFVLEVBQUUsV0FBSSxDQUFDLGlCQUFpQixDQUFFLFdBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRTt5QkFFMUYsQ0FBQyxFQUFBOzt3QkFKRixTQUlFLENBQUM7Ozs7O0tBRU47SUFFSyx3Q0FBUSxHQUFkOzs7Ozs0QkFFVyxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLEVBQUE7OzhCQUE1QyxTQUE0Qzs7d0JBQUsscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxFQUFBOzt3QkFBakQsS0FBQSxDQUFDLENBQUEsU0FBZ0QsQ0FBQSxDQUFBOzs0QkFBeEcsMEJBQXlHOzs7O0tBRTVHO0lBRUsscUNBQUssR0FBWDs7Ozs0QkFFSSxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLEVBQUE7O3dCQUE1QyxTQUE0QyxDQUFDOzs7OztLQUVoRDtJQUVLLHNDQUFNLEdBQVosVUFBYyxLQUE2Qjs7Ozs7NEJBRWhDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDOzs7OzRDQUVsQyxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7OzZDQUF0QixDQUFDLENBQUEsU0FBcUIsQ0FBQSxFQUF0Qix3QkFBc0I7d0NBRVIscUJBQU0sS0FBSyxFQUFFLEVBQUE7O3dDQUFyQixLQUFLLEdBQUcsU0FBYTt3Q0FFM0IscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUUsRUFBQTs7d0NBQTVCLFNBQTRCLENBQUM7d0NBRTdCLHNCQUFPLEtBQUssRUFBQzs0Q0FJakIsc0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDOzs7NkJBRTFCLENBQUMsRUFBQTs0QkFkRixzQkFBTyxTQWNMLEVBQUM7Ozs7S0FFTjtJQUVELDBDQUFVLEdBQVY7UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFeEIsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBWSxPQUFlO1FBRXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRTNCLENBQUM7SUFFTCw0QkFBQztBQUFELENBQUMsQUE1RkQsSUE0RkM7QUE1Rlksc0RBQXFCIn0=