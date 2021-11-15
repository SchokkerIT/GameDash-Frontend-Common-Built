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
//# sourceMappingURL=Time.js.map