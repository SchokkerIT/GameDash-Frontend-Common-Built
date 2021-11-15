"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpiringValue = void 0;
var Time_1 = require("../controllers/time/Time");
var ExpiringValue = /** @class */ (function () {
    function ExpiringValue(value) {
        if (value !== undefined) {
            this.setValue(value);
        }
    }
    ExpiringValue.prototype.getValue = function () {
        if (this.hasExpired()) {
            return undefined;
        }
        return this.value;
    };
    ExpiringValue.prototype.setValue = function (value) {
        this.value = value;
        this.resetTime();
    };
    ExpiringValue.prototype.hasExpired = function () {
        var time = this.getTime();
        return time && time.getUnixTimestamp() - Time_1.Time.now().getUnixTimestamp() > this.getThreshold();
    };
    ExpiringValue.prototype.getTime = function () {
        return this.time;
    };
    ExpiringValue.prototype.setTime = function (time) {
        this.time = time;
    };
    ExpiringValue.prototype.resetTime = function () {
        if (this.getThreshold()) {
            this.setTime(Time_1.Time.fromUnixTimestamp(Time_1.Time.now().getUnixTimestamp() + this.getThreshold()));
        }
    };
    ExpiringValue.prototype.getThreshold = function () {
        return this.threshold;
    };
    ExpiringValue.prototype.setThreshold = function (seconds) {
        this.threshold = seconds;
    };
    return ExpiringValue;
}());
exports.ExpiringValue = ExpiringValue;
//# sourceMappingURL=ExpiringValue.js.map