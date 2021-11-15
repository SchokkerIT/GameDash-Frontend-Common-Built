"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listeners = void 0;
var Listeners_1 = require("./nonStatic/Listeners");
var Listener_1 = require("./Listener");
var Callback_1 = require("./Callback");
var Listeners = /** @class */ (function () {
    function Listeners() {
    }
    Listeners.getAll = function () {
        return Listeners.listeners;
    };
    Listeners.add = function (name, callback) {
        var Listener = Listeners.get(name);
        return Listener.addCallback(new Callback_1.Callback(callback));
    };
    Listeners.get = function (name) {
        var listener = this.getAll().find(function (listener) {
            return listener.getName() === name;
        });
        if (listener != undefined) {
            return listener;
        }
        listener = new Listener_1.Listener(name);
        Listeners.listeners.push(listener);
        return listener;
    };
    Listeners.NonStatic = Listeners_1.Listeners;
    Listeners.listeners = [];
    return Listeners;
}());
exports.Listeners = Listeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGVuZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVyL0xpc3RlbmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBd0U7QUFDeEUsdUNBQXNDO0FBSXRDLHVDQUFpRDtBQUVqRDtJQUFBO0lBOENBLENBQUM7SUF4Q08sZ0JBQU0sR0FBYjtRQUVDLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUU1QixDQUFDO0lBRU0sYUFBRyxHQUFWLFVBQVksSUFBWSxFQUFFLFFBQW1CO1FBRTVDLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUM7UUFFdkMsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUUxQixJQUFJLG1CQUFRLENBQUUsUUFBUSxDQUFFLENBRXhCLENBQUM7SUFFSCxDQUFDO0lBRU0sYUFBRyxHQUFWLFVBQVksSUFBWTtRQUV2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBa0I7WUFFcEQsT0FBTyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDO1FBRXBDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFHO1lBRTNCLE9BQU8sUUFBUSxDQUFDO1NBRWhCO1FBRUQsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUVoQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUUsQ0FBQztRQUVyQyxPQUFPLFFBQVEsQ0FBQztJQUVqQixDQUFDO0lBMUNNLG1CQUFTLEdBQUcscUJBQWtCLENBQUM7SUFFckIsbUJBQVMsR0FBZSxFQUFFLENBQUM7SUEwQzdDLGdCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksOEJBQVMifQ==