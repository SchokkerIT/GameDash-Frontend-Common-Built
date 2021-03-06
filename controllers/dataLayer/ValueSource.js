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
exports.ValueSource = void 0;
var Time_1 = require("../time/Time");
var ValueSource = /** @class */ (function () {
    function ValueSource(fetchableValues, fetchFunction) {
        this.cachingEnabled = true;
        this.fetchableValues = fetchableValues;
        this.fetchFunction = fetchFunction;
    }
    ValueSource.prototype.getFetchableValues = function () {
        return this.fetchableValues;
    };
    ValueSource.prototype.valueIsFetchable = function (name) {
        return this.fetchableValues.find(function (_name) { return _name == name; }) != undefined;
    };
    ValueSource.prototype.fetch = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchFunction(name)];
                    case 1:
                        result = _a.sent();
                        this.updateTimeLastFetched();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ValueSource.prototype.getTimeout = function () {
        return this.timeout;
    };
    ValueSource.prototype.hasTimedOut = function () {
        var timeout = this.getTimeout();
        var lastFetchTime = this.getTimeLastFetched();
        return Boolean(timeout) && Boolean(lastFetchTime) && (Time_1.Time.now().getUnixTimestamp() - lastFetchTime.getUnixTimestamp()) > timeout;
    };
    ValueSource.prototype.setTimeout = function (timeout) {
        this.timeout = timeout;
    };
    ValueSource.prototype.getTimeLastFetched = function () {
        return this.lastFetchTime;
    };
    ValueSource.prototype.updateTimeLastFetched = function () {
        this.setTimeLastFetched(Time_1.Time.now());
    };
    ValueSource.prototype.setTimeLastFetched = function (time) {
        this.lastFetchTime = time;
    };
    ValueSource.prototype.cachingIsEnabled = function () {
        return this.cachingEnabled;
    };
    ValueSource.prototype.setCachingIsEnabled = function (enabled) {
        this.cachingEnabled = enabled;
    };
    return ValueSource;
}());
exports.ValueSource = ValueSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWVTb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvZGF0YUxheWVyL1ZhbHVlU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUk3QztJQVFJLHFCQUFhLGVBQXlCLEVBQUUsYUFBNkI7UUFGN0QsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFJMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFFdkMsQ0FBQztJQUVELHdDQUFrQixHQUFsQjtRQUVJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUVoQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWtCLElBQVk7UUFFMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssSUFBSSxJQUFJLEVBQWIsQ0FBYSxDQUFDLElBQUksU0FBUyxDQUFDO0lBRTFFLENBQUM7SUFFSywyQkFBSyxHQUFYLFVBQWEsSUFBWTs7Ozs7NEJBRU4scUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUUsRUFBQTs7d0JBQXpDLE1BQU0sR0FBRyxTQUFnQzt3QkFFL0MsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7d0JBRTdCLHNCQUFPLE1BQU0sRUFBQzs7OztLQUVqQjtJQUVELGdDQUFVLEdBQVY7UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFeEIsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFFSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFaEQsT0FBTyxPQUFPLENBQUUsT0FBTyxDQUFFLElBQUksT0FBTyxDQUFFLGFBQWEsQ0FBRSxJQUFJLENBQUUsV0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUUsR0FBRyxPQUFPLENBQUM7SUFFNUksQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBWSxPQUFlO1FBRXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRTNCLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEI7UUFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFFOUIsQ0FBQztJQUVELDJDQUFxQixHQUFyQjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxXQUFJLENBQUMsR0FBRyxFQUFFLENBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRUQsd0NBQWtCLEdBQWxCLFVBQW9CLElBQVU7UUFFMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFFOUIsQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUVJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUUvQixDQUFDO0lBRUQseUNBQW1CLEdBQW5CLFVBQXFCLE9BQWdCO1FBRWpDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBRWxDLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUF4RkQsSUF3RkM7QUF4Rlksa0NBQVcifQ==