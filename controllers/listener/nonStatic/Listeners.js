"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listeners = void 0;
var Listener_1 = require("./Listener");
var Callback_1 = require("../Callback");
var Listeners = /** @class */ (function () {
    function Listeners() {
        this.listeners = [];
    }
    Listeners.prototype.getAll = function () {
        return this.listeners;
    };
    Listeners.prototype.add = function (name, callback) {
        if (callback === void 0) { callback = function () { }; }
        var listener = this.get(name);
        return listener.addCallback(new Callback_1.Callback(callback));
    };
    Listeners.prototype.addAll = function (names, callback) {
        var _this = this;
        return names.map(function (name) {
            var listener = _this.get(name);
            return listener.addCallback(new Callback_1.Callback(callback));
        });
    };
    Listeners.prototype.get = function (name) {
        var listener = this.getAll().find(function (listener) { return listener.getName() === name; });
        if (listener != undefined) {
            return listener;
        }
        listener = new Listener_1.Listener(name);
        this.listeners.push(listener);
        return listener;
    };
    return Listeners;
}());
exports.Listeners = Listeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGVuZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVyL25vblN0YXRpYy9MaXN0ZW5lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXNDO0FBQ3RDLHdDQUFrRDtBQUVsRDtJQUFBO1FBRVUsY0FBUyxHQUFlLEVBQUUsQ0FBQztJQTJEckMsQ0FBQztJQXpEQSwwQkFBTSxHQUFOO1FBRUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBRXZCLENBQUM7SUFFRCx1QkFBRyxHQUFILFVBRUMsSUFBWSxFQUNaLFFBQThCO1FBQTlCLHlCQUFBLEVBQUEseUJBQTZCLENBQUM7UUFJOUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUVsQyxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBRTFCLElBQUksbUJBQVEsQ0FBRSxRQUFRLENBQUUsQ0FFeEIsQ0FBQztJQUVILENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsS0FBZSxFQUFFLFFBQW1CO1FBQTVDLGlCQWNDO1FBWkEsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUVwQixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBRSxDQUFDO1lBRWxDLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FFMUIsSUFBSSxtQkFBUSxDQUFFLFFBQVEsQ0FBRSxDQUV4QixDQUFDO1FBRUgsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDO0lBRUQsdUJBQUcsR0FBSCxVQUFLLElBQVk7UUFFaEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUUzRSxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUc7WUFFM0IsT0FBTyxRQUFRLENBQUM7U0FFaEI7UUFFRCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBRSxDQUFDO1FBRWhDLE9BQU8sUUFBUSxDQUFDO0lBRWpCLENBQUM7SUFFRixnQkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7QUE3RFksOEJBQVMifQ==