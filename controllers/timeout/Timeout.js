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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy90aW1lb3V0L1RpbWVvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7SUFPSSxpQkFBYSxJQUFXLEVBQUUsRUFBVTtRQUo1QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBTXRCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWpCLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFWRyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO1lBRWpCLEtBQUksQ0FBQyxZQUFZLENBQUUsS0FBSyxDQUFFLENBQUM7WUFFM0IsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWhCLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFaEIsQ0FBQztJQUVELHNCQUFJLEdBQUo7UUFFSSxJQUFJLENBQUMsWUFBWSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRTNCLFlBQVksQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFFLENBQUM7SUFFNUIsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFFM0IsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYyxTQUFrQjtRQUU1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUVoQyxDQUFDO0lBRU0sYUFBSyxHQUFaLFVBQWMsSUFBeUIsRUFBRSxFQUFVO1FBRS9DLE9BQU8sSUFBSSxPQUFPLENBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBRSxDQUFDO0lBRW5DLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQWhFWSwwQkFBTyJ9