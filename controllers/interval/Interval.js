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
//# sourceMappingURL=Interval.js.map