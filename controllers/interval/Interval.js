"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interval = void 0;
var IntervalAlreadyRunningException_1 = __importDefault(require("./IntervalAlreadyRunningException"));
var Interval = /** @class */ (function () {
    function Interval(func, ms) {
        this.running = false;
        this.iteration = 0;
        this.func = func;
        this.ms = ms;
    }
    Interval.prototype.getId = function () {
        return this.id;
    };
    Interval.prototype.start = function () {
        var _this = this;
        if (this.isRunning()) {
            throw new IntervalAlreadyRunningException_1.default('Interval already running');
        }
        this.setIsRunning(true);
        this.id = setInterval(function () {
            _this.func(_this);
            _this.incrementIteration();
        }, this.ms);
    };
    Interval.prototype.suspend = function () {
        this.setIsRunning(false);
        clearInterval(this.id);
    };
    Interval.prototype.isRunning = function () {
        return this.running;
    };
    Interval.prototype.reset = function () {
        this.suspend();
        this.start();
    };
    Interval.prototype.setIsRunning = function (isRunning) {
        this.running = isRunning;
    };
    Interval.prototype.getIteration = function () {
        return this.iteration;
    };
    Interval.prototype.setIteration = function (iteration) {
        this.iteration = iteration;
    };
    Interval.prototype.incrementIteration = function () {
        this.setIteration(this.getIteration() + 1);
    };
    Interval.create = function (func, ms) {
        return new Interval(func, ms);
    };
    Interval.start = function (func, ms) {
        var interval = Interval.create(func, ms);
        interval.start();
        return interval;
    };
    return Interval;
}());
exports.Interval = Interval;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJ2YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvaW50ZXJ2YWwvSW50ZXJ2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0dBQWdGO0FBSWhGO0lBUUksa0JBQWEsSUFBVyxFQUFFLEVBQVU7UUFINUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBSWxCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRWpCLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBRUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBa0JDO1FBaEJHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFHO1lBRW5CLE1BQU0sSUFBSSx5Q0FBK0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBRXpFO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztZQUVsQixLQUFJLENBQUMsSUFBSSxDQUFFLEtBQUksQ0FBRSxDQUFDO1lBRWxCLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTlCLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFaEIsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFFSSxJQUFJLENBQUMsWUFBWSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRTNCLGFBQWEsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFFLENBQUM7SUFFN0IsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFeEIsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYyxTQUFrQjtRQUU1QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUU3QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUUxQixDQUFDO0lBRU8sK0JBQVksR0FBcEIsVUFBc0IsU0FBaUI7UUFFbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFFL0IsQ0FBQztJQUVPLHFDQUFrQixHQUExQjtRQUVJLElBQUksQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBRSxDQUFDO0lBRWpELENBQUM7SUFFTSxlQUFNLEdBQWIsVUFBZSxJQUFXLEVBQUUsRUFBVTtRQUVsQyxPQUFPLElBQUksUUFBUSxDQUFFLElBQUksRUFBRSxFQUFFLENBQUUsQ0FBQztJQUVwQyxDQUFDO0lBRU0sY0FBSyxHQUFaLFVBQWMsSUFBVyxFQUFFLEVBQVU7UUFFakMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBRSxJQUFJLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFFekMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJCLE9BQU8sUUFBUSxDQUFDO0lBRXBCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FBQyxBQXZHRCxJQXVHQztBQXZHWSw0QkFBUSJ9