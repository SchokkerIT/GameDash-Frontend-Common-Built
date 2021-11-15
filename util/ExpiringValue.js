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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwaXJpbmdWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL0V4cGlyaW5nVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTZDO0FBRTdDO0lBT0ksdUJBQWEsS0FBUztRQUVsQixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUc7WUFFdEIsSUFBSSxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUUsQ0FBQztTQUUxQjtJQUVMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBRUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUc7WUFFcEIsT0FBTyxTQUFTLENBQUM7U0FFcEI7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFdEIsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBVSxLQUFRO1FBRWQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLFdBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVqRyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFTLElBQVU7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUVJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFHO1lBRXRCLElBQUksQ0FBQyxPQUFPLENBQUUsV0FBSSxDQUFDLGlCQUFpQixDQUFFLFdBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBRSxDQUFFLENBQUM7U0FFakc7SUFFTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUUxQixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFjLE9BQWU7UUFFekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFFN0IsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQS9FRCxJQStFQztBQS9FWSxzQ0FBYSJ9