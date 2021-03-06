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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachedValue = void 0;
var Mutex_1 = require("../mutex/Mutex");
var Implementations_1 = require("./Implementations");
var AbstractTaggedImplementation_1 = require("./AbstractTaggedImplementation");
var ExpiringValue_1 = require("../../util/ExpiringValue");
var CachedValue = /** @class */ (function (_super) {
    __extends(CachedValue, _super);
    function CachedValue(value) {
        var _this = _super.call(this) || this;
        _this.handleMutex = new Mutex_1.Mutex();
        _this.value = new ExpiringValue_1.ExpiringValue();
        if (value !== undefined) {
            _this.setValue(value);
        }
        return _this;
    }
    CachedValue.prototype.getValue = function () {
        return this.value.getValue();
    };
    CachedValue.prototype.setValue = function (value) {
        this.value.setValue(value);
    };
    CachedValue.prototype.isCached = function () {
        return this.value.getValue() !== undefined;
    };
    CachedValue.prototype.getExpiryThreshold = function () {
        return this.value.getThreshold();
    };
    CachedValue.prototype.setExpiryThreshold = function (seconds) {
        this.value.setThreshold(seconds);
    };
    CachedValue.prototype.clear = function () {
        this.value.setValue(undefined);
    };
    /**
     * Handler function to prevent boilerplate code having to handle synchronisation, checking for cache status, fetching and caching
     * @param fetch
     */
    CachedValue.prototype.handle = function (fetch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleMutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            var value;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!this.isCached()) return [3 /*break*/, 2];
                                        return [4 /*yield*/, fetch()];
                                    case 1:
                                        value = _a.sent();
                                        this.setValue(value);
                                        return [2 /*return*/, value];
                                    case 2: return [2 /*return*/, this.getValue()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CachedValue.prototype.handleSync = function (fetch) {
        if (!this.isCached()) {
            this.setValue(fetch());
        }
        return this.getValue();
    };
    /**
     * Construct a given class object with parameters and store
     * @param classObject
     * @param args
     */
    CachedValue.prototype.handleObjectConstruction = function (classObject, args) {
        if (!this.isCached()) {
            this.setValue(new (classObject.bind.apply(classObject, __spreadArray([void 0], args, false)))());
        }
        return this.getValue();
    };
    CachedValue.prototype.ensureImplementationIsRegistered = function () {
        if (!Implementations_1.Implementations.exists(this)) {
            this.registerImplementation(this);
            return true;
        }
        return false;
    };
    return CachedValue;
}(AbstractTaggedImplementation_1.AbstractTaggedImplementation));
exports.CachedValue = CachedValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVkVmFsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvY2FjaGUvQ2FjaGVkVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWdEO0FBQ2hELHFEQUFvRDtBQUVwRCwrRUFBOEU7QUFFOUUsMERBQW1EO0FBRW5EO0lBQW9DLCtCQUE0QjtJQUs1RCxxQkFBYSxLQUFTO1FBQXRCLFlBRUksaUJBQU8sU0FRVjtRQWJnQixpQkFBVyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDbkMsV0FBSyxHQUFHLElBQUksNkJBQWEsRUFBSyxDQUFDO1FBTW5DLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRztZQUV0QixLQUFJLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBRSxDQUFDO1NBRTFCOztJQUVMLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRWpDLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVUsS0FBUTtRQUVkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBRWpDLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLFNBQVMsQ0FBQztJQUUvQyxDQUFDO0lBRUQsd0NBQWtCLEdBQWxCO1FBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXJDLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBb0IsT0FBZTtRQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBRSxPQUFPLENBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFFLFNBQVMsQ0FBRSxDQUFDO0lBRXJDLENBQUM7SUFFRDs7O09BR0c7SUFDRyw0QkFBTSxHQUFaLFVBQWMsS0FBNkI7Ozs7OzRCQUVoQyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQzs7Ozs7NkNBRW5DLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFoQix3QkFBZ0I7d0NBRUYscUJBQU0sS0FBSyxFQUFFLEVBQUE7O3dDQUFyQixLQUFLLEdBQUcsU0FBYTt3Q0FFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUUsQ0FBQzt3Q0FFdkIsc0JBQU8sS0FBSyxFQUFDOzRDQUlqQixzQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUM7Ozs2QkFFMUIsQ0FBQyxFQUFBOzRCQWRGLHNCQUFPLFNBY0wsRUFBQzs7OztLQUVOO0lBRUQsZ0NBQVUsR0FBVixVQUFZLEtBQWdCO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUc7WUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDO1NBRTVCO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4Q0FBd0IsR0FBeEIsVUFBMEIsV0FBeUMsRUFBRSxJQUFXO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUc7WUFFbkIsSUFBSSxDQUFDLFFBQVEsTUFBTSxXQUFXLFlBQVgsV0FBVywwQkFBSyxJQUFJLGFBQUksQ0FBQztTQUUvQztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFFUyxzREFBZ0MsR0FBMUM7UUFFSSxJQUFJLENBQUMsaUNBQWUsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFFLEVBQUc7WUFFbEMsSUFBSSxDQUFDLHNCQUFzQixDQUFFLElBQUksQ0FBRSxDQUFDO1lBRXBDLE9BQU8sSUFBSSxDQUFDO1NBRWY7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUVqQixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBeEhELENBQW9DLDJEQUE0QixHQXdIL0Q7QUF4SFksa0NBQVcifQ==