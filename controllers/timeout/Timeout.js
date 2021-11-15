"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeout = void 0;
var Timeout = /** @class */ (function () {
    function Timeout(func, ms) {
        this._isRunning = true;
        this.func = func;
        this.ms = ms;
        this.start();
    }
    Timeout.prototype.start = function () {
        var _this = this;
        this.setIsRunning(true);
        this.id = setTimeout(function () {
            _this.setIsRunning(false);
            _this.func();
        }, this.ms);
    };
    Timeout.prototype.stop = function () {
        this.setIsRunning(false);
        clearTimeout(this.id);
    };
    Timeout.prototype.isRunning = function () {
        return this._isRunning;
    };
    Timeout.prototype.reset = function () {
        this.stop();
        this.start();
    };
    Timeout.prototype.setIsRunning = function (isRunning) {
        this._isRunning = isRunning;
    };
    Timeout.start = function (func, ms) {
        return new Timeout(func, ms);
    };
    return Timeout;
}());
exports.Timeout = Timeout;
//# sourceMappingURL=Timeout.js.map