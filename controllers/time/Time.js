"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
var moment_1 = __importDefault(require("moment"));
var javascript_time_ago_1 = __importDefault(require("javascript-time-ago"));
var en_1 = __importDefault(require("javascript-time-ago/locale/en"));
var TripleSplit_1 = require("../../enums/time/TripleSplit");
var Time = /** @class */ (function () {
    function Time(timestamp) {
        this.timestamp = timestamp;
        javascript_time_ago_1.default.addLocale(en_1.default);
    }
    Time.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    Time.prototype.getUnixTimestamp = function () {
        return Math.floor(this.timestamp / 1000);
    };
    Time.prototype.getSecondsAgo = function () {
        return Time.now().getUnixTimestamp() - this.getUnixTimestamp();
    };
    Time.prototype.toTimeAgoFormatted = function (format) {
        if (format === void 0) { format = 'twitter'; }
        var timeAgo = new javascript_time_ago_1.default('en-US');
        return timeAgo.format(this.toDate());
    };
    Time.prototype.toFormatted = function (format) {
        return moment_1.default.unix(this.getUnixTimestamp()).format(format);
    };
    Time.prototype.tripleSplit = function () {
        var splitAfternoon = 12;
        var splitEvening = 17;
        var currentHour = parseFloat(this.toFormatted("HH"));
        if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
            return TripleSplit_1.TripleSplit.afternoon;
        }
        if (currentHour >= splitEvening) {
            return TripleSplit_1.TripleSplit.evening;
        }
        return TripleSplit_1.TripleSplit.morning;
    };
    Time.prototype.isSameDay = function (t2) {
        return (this.toDate().getFullYear() === t2.toDate().getFullYear()
            &&
                this.toDate().getMonth() === t2.toDate().getMonth()
            &&
                this.toDate().getDate() === t2.toDate().getDate());
    };
    Time.prototype.toDate = function () {
        return moment_1.default.unix(this.getUnixTimestamp()).toDate();
    };
    Time.fromDate = function (date) {
        return new Time(date.getTime());
    };
    Time.create = function (timestamp) {
        return new Time(timestamp);
    };
    Time.fromTimestamp = function (timestamp) {
        return Time.create(timestamp);
    };
    Time.fromUnixTimestamp = function (timestamp) {
        return Time.create(timestamp * 1000);
    };
    Time.now = function () {
        return Time.fromTimestamp(Date.now());
    };
    return Time;
}());
exports.Time = Time;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy90aW1lL1RpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQTRCO0FBQzVCLDRFQUEwQztBQUMxQyxxRUFBZ0U7QUFFaEUsNERBQXFGO0FBRXJGO0lBS0ksY0FBb0IsU0FBaUI7UUFFakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsNkJBQU8sQ0FBQyxTQUFTLENBQUUsWUFBb0IsQ0FBRSxDQUFDO0lBRTlDLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBRTFCLENBQUM7SUFFRCwrQkFBZ0IsR0FBaEI7UUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUUsQ0FBQztJQUUvQyxDQUFDO0lBRUQsNEJBQWEsR0FBYjtRQUVJLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFFbkUsQ0FBQztJQUVELGlDQUFrQixHQUFsQixVQUFvQixNQUEwQjtRQUExQix1QkFBQSxFQUFBLGtCQUEwQjtRQUUxQyxJQUFNLE9BQU8sR0FBRyxJQUFJLDZCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBWSxDQUFDO0lBRXJELENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQWEsTUFBYztRQUV2QixPQUFPLGdCQUFNLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFFLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBRSxDQUFDO0lBRW5FLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBRUksSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO1FBRXpELElBQUksV0FBVyxJQUFJLGNBQWMsSUFBSSxXQUFXLElBQUksWUFBWSxFQUFHO1lBRS9ELE9BQU8seUJBQVcsQ0FBQyxTQUFTLENBQUM7U0FFaEM7UUFFRCxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUc7WUFFOUIsT0FBTyx5QkFBVyxDQUFDLE9BQU8sQ0FBQztTQUU5QjtRQUVELE9BQU8seUJBQVcsQ0FBQyxPQUFPLENBQUM7SUFFL0IsQ0FBQztJQUVELHdCQUFTLEdBQVQsVUFBVyxFQUFRO1FBRWYsT0FBTyxDQUVILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFOztnQkFJekQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O2dCQUluRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUVwRCxDQUFDO0lBRU4sQ0FBQztJQUVNLHFCQUFNLEdBQWI7UUFFSSxPQUFPLGdCQUFNLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFM0QsQ0FBQztJQUVhLGFBQVEsR0FBdEIsVUFBd0IsSUFBVTtRQUU5QixPQUFPLElBQUksSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO0lBRXRDLENBQUM7SUFFYSxXQUFNLEdBQXBCLFVBQXNCLFNBQWlCO1FBRW5DLE9BQU8sSUFBSSxJQUFJLENBQUUsU0FBUyxDQUFFLENBQUM7SUFFakMsQ0FBQztJQUVhLGtCQUFhLEdBQTNCLFVBQTZCLFNBQWlCO1FBRTFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxTQUFTLENBQUUsQ0FBQztJQUVwQyxDQUFDO0lBRWEsc0JBQWlCLEdBQS9CLFVBQWlDLFNBQWlCO1FBRTlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxTQUFTLEdBQUcsSUFBSSxDQUFFLENBQUM7SUFFM0MsQ0FBQztJQUVhLFFBQUcsR0FBakI7UUFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFFLENBQUM7SUFFNUMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBekhELElBeUhDO0FBekhZLG9CQUFJIn0=