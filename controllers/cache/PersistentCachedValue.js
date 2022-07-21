"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var AbstractTaggedImplementation_1 = require("./AbstractTaggedImplementation");
var Implementations_1 = require("./Implementations");
var PersistentCachedValue = /** @class */ (function (_super) {
    __extends(PersistentCachedValue, _super);
    function PersistentCachedValue(storageKey, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.handleMutex = new Mutex_1.Mutex();
        _this.storage = new Storage_1.Storage();
        _this.storageKey = storageKey;
        var timeout = options.timeout;
        if (timeout) {
            _this.setTimeout(timeout);
        }
        return _this;
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
    PersistentCachedValue.prototype.ensureImplementationIsRegistered = function () {
        if (!Implementations_1.Implementations.exists(this)) {
            this.registerImplementation(this);
            return true;
        }
        return false;
    };
    return PersistentCachedValue;
}(AbstractTaggedImplementation_1.AbstractTaggedImplementation));
exports.PersistentCachedValue = PersistentCachedValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudENhY2hlZFZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NhY2hlL1BlcnNpc3RlbnRDYWNoZWRWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNkM7QUFDN0MsOENBQXNEO0FBQ3RELHdDQUFnRDtBQUVoRCwrRUFBOEY7QUFDOUYscURBQW9FO0FBRXBFO0lBQThDLHlDQUE0QjtJQU90RSwrQkFFSSxVQUFrQixFQUNsQixPQUlNO1FBSk4sd0JBQUEsRUFBQSxZQUlNO1FBUFYsWUFXSSxpQkFBTyxTQVlWO1FBNUJnQixpQkFBVyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFFMUIsYUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBZ0JyQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUVyQixJQUFBLE9BQU8sR0FBSyxPQUFPLFFBQVosQ0FBYTtRQUU1QixJQUFJLE9BQU8sRUFBRztZQUVWLEtBQUksQ0FBQyxVQUFVLENBQUUsT0FBTyxDQUFFLENBQUM7U0FFOUI7O0lBRUwsQ0FBQztJQUVLLHdDQUFRLEdBQWQ7Ozs7NEJBRVcscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxFQUFBOzRCQUFoRCxzQkFBTyxTQUF5QyxFQUFDOzs7O0tBRXBEO0lBRUssd0NBQVEsR0FBZCxVQUFnQixLQUFROzs7OzRCQUVwQixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRTs0QkFFM0MsVUFBVSxFQUFFLFdBQUksQ0FBQyxpQkFBaUIsQ0FBRSxXQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUU7eUJBRTFGLENBQUMsRUFBQTs7d0JBSkYsU0FJRSxDQUFDOzs7OztLQUVOO0lBRUssd0NBQVEsR0FBZDs7Ozs7NEJBRVcscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxFQUFBOzs4QkFBNUMsU0FBNEM7O3dCQUFLLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsRUFBQTs7d0JBQWpELEtBQUEsQ0FBQyxDQUFBLFNBQWdELENBQUEsQ0FBQTs7NEJBQXhHLDBCQUF5Rzs7OztLQUU1RztJQUVLLHFDQUFLLEdBQVg7Ozs7NEJBRUkscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxFQUFBOzt3QkFBNUMsU0FBNEMsQ0FBQzs7Ozs7S0FFaEQ7SUFFSyxzQ0FBTSxHQUFaLFVBQWMsS0FBNkI7Ozs7OzRCQUVoQyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQzs7Ozs0Q0FFbEMscUJBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzs2Q0FBdEIsQ0FBQyxDQUFBLFNBQXFCLENBQUEsRUFBdEIsd0JBQXNCO3dDQUVSLHFCQUFNLEtBQUssRUFBRSxFQUFBOzt3Q0FBckIsS0FBSyxHQUFHLFNBQWE7d0NBRTNCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFFLEVBQUE7O3dDQUE1QixTQUE0QixDQUFDO3dDQUU3QixzQkFBTyxLQUFLLEVBQUM7NENBSWpCLHNCQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQzs7OzZCQUUxQixDQUFDLEVBQUE7NEJBZEYsc0JBQU8sU0FjTCxFQUFDOzs7O0tBRU47SUFFRCwwQ0FBVSxHQUFWO1FBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBRXhCLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVksT0FBZTtRQUV2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUUzQixDQUFDO0lBRVMsZ0VBQWdDLEdBQTFDO1FBRUksSUFBSSxDQUFDLGlDQUFlLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBRSxFQUFHO1lBRWxDLElBQUksQ0FBQyxzQkFBc0IsQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUVwQyxPQUFPLElBQUksQ0FBQztTQUVmO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQTFHRCxDQUE4QywyREFBNEIsR0EwR3pFO0FBMUdZLHNEQUFxQiJ9