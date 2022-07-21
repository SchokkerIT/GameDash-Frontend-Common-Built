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
var Mutex_1 = require("../mutex/Mutex");
var Time_1 = require("../time/Time");
var Implementations_1 = require("./Implementations");
var AbstractTaggedImplementation_1 = require("./AbstractTaggedImplementation");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mutex = new Mutex_1.Mutex();
        return _this;
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
    default_1.prototype.ensureImplementationIsRegistered = function () {
        if (!Implementations_1.Implementations.exists(this)) {
            this.registerImplementation(this);
            return true;
        }
        return false;
    };
    default_1.prototype.updateLastModifiedTime = function () {
        this.lastModifiedTime = Time_1.Time.now();
    };
    return default_1;
}(AbstractTaggedImplementation_1.AbstractTaggedImplementation));
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jYWNoZS9DYWNoZWRMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWdEO0FBRWhELHFDQUE2QztBQUU3QyxxREFBb0Q7QUFFcEQsK0VBQThFO0FBRTlFO0lBQXlDLDZCQUE0QjtJQUFyRTtRQUFBLHFFQXFMQztRQW5MVyxXQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQzs7SUFtTGhDLENBQUM7SUE5S0cseUJBQUssR0FBTDtRQUVJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFHO1lBRXJCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUVoQjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRU8seUJBQUssR0FBYixVQUFlLElBQVM7UUFFcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFFSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0IsT0FBTyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUUzQyxDQUFDO0lBRUQsdUJBQUcsR0FBSCxVQUFLLElBQU87UUFFUixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFHO1lBRXBCLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFFLENBQUM7U0FFdkI7YUFDSTtZQUVELElBQUksR0FBRyxFQUFFLENBQUM7U0FFYjtRQUVELElBQUksQ0FB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