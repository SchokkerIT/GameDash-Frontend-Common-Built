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
var Mutex_1 = require("controllers/mutex/Mutex");
var Time_1 = require("controllers/time/Time");
var Implementations_1 = require("./Implementations");
var default_1 = /** @class */ (function () {
    function default_1() {
        this.mutex = new Mutex_1.Mutex();
        Implementations_1.Implementations.add(this);
    }
    default_1.prototype.fetch = function () {
        if (this.hasTimedOut()) {
            this.clear();
        }
        return this.list;
    };
    default_1.prototype.write = function (list) {
        this.list = list;
        this.updateLastModifiedTime();
    };
    default_1.prototype.getAll = function () {
        var value = this.fetch();
        return value != undefined ? value : [];
    };
    default_1.prototype.add = function (item) {
        var list = this.fetch();
        if (list != undefined) {
            this.remove(item);
        }
        else {
            list = [];
        }
        list.push(item);
        this.write(list);
    };
    default_1.prototype.addAll = function (items) {
        this.write(items);
    };
    default_1.prototype.remove = function (item) {
        var _this = this;
        var list = this.fetch();
        if (list != undefined) {
            list = list.filter(function (_item) { return !_this.compare(_item, item); });
        }
        this.write(list);
    };
    default_1.prototype.isCached = function () {
        return this.fetch() !== undefined;
    };
    default_1.prototype.clear = function () {
        this.list = undefined;
    };
    default_1.prototype.handle = function (fetch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mutex.runExclusive(function () { return __awaiter(_this, void 0, void 0, function () {
                            var items;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (this.isCached()) {
                                            return [2 /*return*/, this.getAll()];
                                        }
                                        return [4 /*yield*/, fetch()];
                                    case 1:
                                        items = _a.sent();
                                        this.addAll(items);
                                        return [2 /*return*/, items];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    default_1.prototype.handleSync = function (fetch) {
        var items = fetch();
        this.addAll(items);
        return items;
    };
    /**
     * Get timeout in seconds
     */
    default_1.prototype.getTimeout = function () {
        return this.timeout;
    };
    /**
     * Set timeout in seconds
     * @param timeout
     */
    default_1.prototype.setTimeout = function (timeout) {
        this.timeout = timeout;
    };
    default_1.prototype.hasTimedOut = function () {
        var lastModifiedTime = this.getLastModifiedTime();
        return lastModifiedTime !== undefined && Time_1.Time.now().getUnixTimestamp() - this.getLastModifiedTime().getUnixTimestamp() > this.getTimeout();
    };
    default_1.prototype.getLastModifiedTime = function () {
        return this.lastModifiedTime;
    };
    default_1.prototype.updateLastModifiedTime = function () {
        this.lastModifiedTime = Time_1.Time.now();
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=CachedList.js.map