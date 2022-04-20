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
    function Time(moment) {
        this.moment = moment;
        javascript_time_ago_1.default.addLocale(en_1.default);
    }
    Time.prototype.getUnixTimestamp = function () {
        return this.moment.unix();
    };
    Time.prototype.getUnixMillisTimestamp = function () {
        return parseInt(this.moment.format('x'));
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
        return this.moment.format(format);
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
    /**
     * Return UTC to local timezone offset in seconds
     */
    Time.getUtcOffset = function () {
        return new Date().getTimezoneOffset() * 60;
    };
    Time.fromDate = function (date) {
        return new Time((0, moment_1.default)(date.getTime()));
    };
    Time.fromUnixTimestamp = function (timestamp) {
        return new Time(moment_1.default.unix(timestamp));
    };
    Time.fromUnixTimestampMillis = function (timestampMillis) {
        return new Time(moment_1.default.unix(timestampMillis / 1000));
    };
    Time.fromUnixTimestampToUtc = function (timestamp) {
        return new Time(moment_1.default.unix(timestamp).utc());
    };
    Time.now = function () {
        return new Time((0, moment_1.default)());
    };
    Time.nowUtc = function () {
        return new Time(moment_1.default.utc());
    };
    return Time;
}());
exports.Time = Time;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy90aW1lL1RpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQTRCO0FBQzVCLDRFQUEwQztBQUMxQyxxRUFBZ0U7QUFFaEUsNERBQXFGO0FBRXJGO0lBS0ksY0FBb0IsTUFBcUI7UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsNkJBQU8sQ0FBQyxTQUFTLENBQUUsWUFBb0IsQ0FBRSxDQUFDO0lBRTlDLENBQUM7SUFFRCwrQkFBZ0IsR0FBaEI7UUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFOUIsQ0FBQztJQUVELHFDQUFzQixHQUF0QjtRQUVJLE9BQU8sUUFBUSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7SUFFL0MsQ0FBQztJQUVELDRCQUFhLEdBQWI7UUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRW5FLENBQUM7SUFFRCxpQ0FBa0IsR0FBbEIsVUFBb0IsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7UUFFMUMsSUFBTSxPQUFPLEdBQUcsSUFBSSw2QkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQVksQ0FBQztJQUVyRCxDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFhLE1BQWM7UUFFdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUV4QyxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUVJLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztRQUV6RCxJQUFJLFdBQVcsSUFBSSxjQUFjLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRztZQUUvRCxPQUFPLHlCQUFXLENBQUMsU0FBUyxDQUFDO1NBRWhDO1FBRUQsSUFBSSxXQUFXLElBQUksWUFBWSxFQUFHO1lBRTlCLE9BQU8seUJBQVcsQ0FBQyxPQUFPLENBQUM7U0FFOUI7UUFFRCxPQUFPLHlCQUFXLENBQUMsT0FBTyxDQUFDO0lBRS9CLENBQUM7SUFFRCx3QkFBUyxHQUFULFVBQVcsRUFBUTtRQUVmLE9BQU8sQ0FFSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRTs7Z0JBSXpELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFOztnQkFJbkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FFcEQsQ0FBQztJQUVOLENBQUM7SUFFTSxxQkFBTSxHQUFiO1FBRUksT0FBTyxnQkFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRTNELENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFZLEdBQW5CO1FBRUksT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRS9DLENBQUM7SUFFYSxhQUFRLEdBQXRCLFVBQXdCLElBQVU7UUFFOUIsT0FBTyxJQUFJLElBQUksQ0FBRSxJQUFBLGdCQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFFLENBQUUsQ0FBQztJQUVoRCxDQUFDO0lBRWEsc0JBQWlCLEdBQS9CLFVBQWlDLFNBQWlCO1FBRTlDLE9BQU8sSUFBSSxJQUFJLENBRVgsZ0JBQU0sQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFFLENBRTNCLENBQUM7SUFFTixDQUFDO0lBRWEsNEJBQXVCLEdBQXJDLFVBQXVDLGVBQXVCO1FBRTFELE9BQU8sSUFBSSxJQUFJLENBRVgsZ0JBQU0sQ0FBQyxJQUFJLENBQUUsZUFBZSxHQUFHLElBQUksQ0FBRSxDQUV4QyxDQUFDO0lBRU4sQ0FBQztJQUVhLDJCQUFzQixHQUFwQyxVQUFzQyxTQUFpQjtRQUVuRCxPQUFPLElBQUksSUFBSSxDQUVYLGdCQUFNLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBRSxDQUFDLEdBQUcsRUFBRSxDQUVqQyxDQUFDO0lBRU4sQ0FBQztJQUVhLFFBQUcsR0FBakI7UUFFSSxPQUFPLElBQUksSUFBSSxDQUFFLElBQUEsZ0JBQU0sR0FBRSxDQUFFLENBQUM7SUFFaEMsQ0FBQztJQUVhLFdBQU0sR0FBcEI7UUFFSSxPQUFPLElBQUksSUFBSSxDQUFFLGdCQUFNLENBQUMsR0FBRyxFQUFFLENBQUUsQ0FBQztJQUVwQyxDQUFDO0lBRUwsV0FBQztBQUFELENBQUMsQUFwSkQsSUFvSkM7QUFwSlksb0JBQUkifQ==