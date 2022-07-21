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
exports.AbstractDataLayer = void 0;
var Mutex_1 = require("../mutex/Mutex");
var Store_1 = require("./Store");
var ValueSource_1 = require("./ValueSource");
var DataLayerRegister_1 = require("./register/DataLayerRegister");
var ValueSourceNotFoundException_1 = __importDefault(require("./ValueSourceNotFoundException"));
var AbstractDataLayer = /** @class */ (function () {
    function AbstractDataLayer() {
        this.valueSources = [];
        this.mutex = new Mutex_1.Mutex();
        this.tags = [];
        this.store = new Store_1.Store();
    }
    AbstractDataLayer.prototype.getName = function () {
        return this.name;
    };
    AbstractDataLayer.prototype.setName = function (name) {
        this.name = name;
    };
    AbstractDataLayer.prototype.getValueSources = function () {
        return this.valueSources;
    };
    AbstractDataLayer.prototype.registerValueSource = function (names, fetchFunction) {
        var valueSource = new ValueSource_1.ValueSource(names, fetchFunction);
        this.valueSources.push(valueSource);
        return valueSource;
    };
    AbstractDataLayer.prototype.getValue = function (name, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var useCache;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        useCache = options.useStore || true;
                        return [4 /*yield*/, this.mutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                                var valueSource, value, supported;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            valueSource = this.findValueSource(name);
                                            if (valueSource) {
                                                if (valueSource.hasTimedOut()) {
                                                    //clear the cache
                                                    this.store.clearValueSource(valueSource);
                                                }
                                            }
                                            if (useCache && this.store.valueExists(name)) {
                                                //value is cached
                                                return [2 /*return*/, this.store.getValue(name)];
                                            }
                                            if (!valueSource) return [3 /*break*/, 2];
                                            return [4 /*yield*/, valueSource.fetch(name)];
                                        case 1:
                                            value = _a.sent();
                                            if (valueSource.cachingIsEnabled()) {
                                                this.store.setValue(name, value);
                                            }
                                            return [2 /*return*/, value];
                                        case 2:
                                            supported = [];
                                            this.getValueSources().forEach(function (source) {
                                                source.getFetchableValues().forEach(function (name) { return supported.push(name); });
                                            });
                                            throw new ValueSourceNotFoundException_1.default([
                                                this.getName() ? "[DataLayer " + this.getName() + "]" : undefined,
                                                "Source that supports getting value \"" + name + "\" not found. Supported: " + (supported.length ? supported.join(', ') : '[]')
                                            ]
                                                .filter(Boolean)
                                                .join(' '));
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbstractDataLayer.prototype.valueIsCached = function (name) {
        return this.store.valueExists(name);
    };
    AbstractDataLayer.prototype.setValue = function (name, value) {
        if (!this.valueIsFetchable(name)) {
            throw new ValueSourceNotFoundException_1.default("No sources allow value " + name);
        }
        this.store.setValue(name, value);
    };
    AbstractDataLayer.prototype.setValues = function (values) {
        for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var value = values[name_1];
            this.setValue(name_1, value);
        }
    };
    AbstractDataLayer.prototype.clearValue = function (name) {
        this.store.deleteValue(name);
    };
    AbstractDataLayer.prototype.findValueSource = function (name) {
        return this.getValueSources().find(function (source) { return source.valueIsFetchable(name); });
    };
    AbstractDataLayer.prototype.clear = function () {
        this.store.clear();
    };
    AbstractDataLayer.prototype.valueIsFetchable = function (name) {
        return true;
        for (var _i = 0, _a = this.getValueSources(); _i < _a.length; _i++) {
            var source = _a[_i];
            if (source.valueIsFetchable(name)) {
                return true;
            }
        }
        return false;
    };
    AbstractDataLayer.prototype.getStore = function () {
        return this.store;
    };
    AbstractDataLayer.prototype.getTags = function () {
        return this.tags;
    };
    AbstractDataLayer.prototype.setTags = function (tags) {
        this.tags = tags;
        DataLayerRegister_1.DataLayerRegister.ensureIsRegistered(this);
    };
    AbstractDataLayer.prototype.addTag = function (tag) {
        this.tags.push(tag);
        DataLayerRegister_1.DataLayerRegister.ensureIsRegistered(this);
    };
    AbstractDataLayer.prototype.destroy = function () {
        if (this.registerHandle) {
            this.registerHandle.destroy();
        }
    };
    return AbstractDataLayer;
}());
exports.AbstractDataLayer = AbstractDataLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3REYXRhTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvZGF0YUxheWVyL0Fic3RyYWN0RGF0YUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFnRDtBQUNoRCxpQ0FBZ0M7QUFDaEMsNkNBQThGO0FBRTlGLGtFQUFpRTtBQUlqRSxnR0FBMEU7QUFFMUU7SUFBQTtRQUVxQixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFDakMsVUFBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFHN0IsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUVuQixVQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQXVOakMsQ0FBQztJQXJORyxtQ0FBTyxHQUFQO1FBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRXJCLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVMsSUFBWTtRQUVqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUVJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUU3QixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBRUksS0FBZSxFQUNmLGFBQTZDO1FBSTdDLElBQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBRSxLQUFLLEVBQUUsYUFBYSxDQUFFLENBQUM7UUFFNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsV0FBVyxDQUFFLENBQUM7UUFFdEMsT0FBTyxXQUFXLENBQUM7SUFFdkIsQ0FBQztJQUVLLG9DQUFRLEdBQWQsVUFFSSxJQUFZLEVBQ1osT0FJTTtRQUpOLHdCQUFBLEVBQUEsWUFJTTs7Ozs7Ozt3QkFJQSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7d0JBRW5DLHFCQUFN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