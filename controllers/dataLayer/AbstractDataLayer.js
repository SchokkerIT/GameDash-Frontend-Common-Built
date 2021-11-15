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
var Registry_1 = require("./Registry");
var ValueSourceNotFoundException_1 = __importDefault(require("./ValueSourceNotFoundException"));
var AbstractDataLayer = /** @class */ (function () {
    function AbstractDataLayer() {
        this.valueSources = [];
        this.mutex = new Mutex_1.Mutex();
        this.tags = [];
        this.store = new Store_1.Store();
        Registry_1.Registry.register(this);
    }
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
                                            this.store.setValue(name, value);
                                            return [2 /*return*/, value];
                                        case 2:
                                            supported = [];
                                            this.getValueSources().forEach(function (source) {
                                                source.getFetchableValues().forEach(function (name) { return supported.push(name); });
                                            });
                                            throw new ValueSourceNotFoundException_1.default("Source that supports getting value \"" + name + "\" not found. Supported: " + (supported.length ? supported.join(', ') : '[]'));
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
    };
    AbstractDataLayer.prototype.addTag = function (tag) {
        this.tags.push(tag);
    };
    return AbstractDataLayer;
}());
exports.AbstractDataLayer = AbstractDataLayer;
//# sourceMappingURL=AbstractDataLayer.js.map