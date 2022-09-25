"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listeners = void 0;
var ListenerSingletonMap_1 = require("./ListenerSingletonMap");
var Listener_1 = require("./Listener");
var Callback_1 = require("../Callback");
var Listeners = /** @class */ (function () {
    function Listeners() {
        this.listenerSingletonMap = new ListenerSingletonMap_1.ListenerSingletonMap();
    }
    Listeners.prototype.getAll = function () {
        return (Object
            .entries(this.listenerSingletonMap.getAll())
            .map(function (_a) {
            var listener = _a[1];
            return listener;
        }));
    };
    Listeners.prototype.add = function (name, callback) {
        if (callback === void 0) { callback = function () { }; }
        var listener = this.get(name);
        return listener.addCallback(new Callback_1.Callback(callback));
    };
    Listeners.prototype.addUnique = function (name, id, callback) {
        if (callback === void 0) { callback = function () { }; }
        var listener = this.get(name);
        return listener.addUniqueCallback(id, new Callback_1.Callback(callback));
    };
    Listeners.prototype.addAll = function (names, callback) {
        var _this = this;
        return names.map(function (name) {
            var listener = _this.get(name);
            return listener.addCallback(new Callback_1.Callback(callback));
        });
    };
    Listeners.prototype.get = function (name) {
        return this.listenerSingletonMap.handle(name, function () { return new Listener_1.Listener(name); });
    };
    return Listeners;
}());
exports.Listeners = Listeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGVuZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVyL25vblN0YXRpYy9MaXN0ZW5lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQThEO0FBQzlELHVDQUFzQztBQUN0Qyx3Q0FBa0Q7QUFJbEQ7SUFBQTtRQUVVLHlCQUFvQixHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztJQWlGNUQsQ0FBQztJQS9FQSwwQkFBTSxHQUFOO1FBRUMsT0FBTyxDQUVOLE1BQU07YUFDSixPQUFPLENBRVAsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUVsQzthQUNBLEdBQUcsQ0FBQyxVQUFDLEVBQWM7Z0JBQVYsUUFBUSxRQUFBO1lBQU8sT0FBQSxRQUFRO1FBQVIsQ0FBUSxDQUFDLENBRW5DLENBQUM7SUFFSCxDQUFDO0lBRUQsdUJBQUcsR0FBSCxVQUVDLElBQVksRUFDWixRQUE4QjtRQUE5Qix5QkFBQSxFQUFBLHlCQUE2QixDQUFDO1FBSTlCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUM7UUFFbEMsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUUxQixJQUFJLG1CQUFRLENBQUUsUUFBUSxDQUFFLENBRXhCLENBQUM7SUFFSCxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUVDLElBQVksRUFDWixFQUFVLEVBQ1YsUUFBOEI7UUFBOUIseUJBQUEsRUFBQSx5QkFBNkIsQ0FBQztRQUk5QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRWxDLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUVoQyxFQUFFLEVBQ0YsSUFBSSxtQkFBUSxDQUFFLFFBQVEsQ0FBRSxDQUV4QixDQUFDO0lBRUgsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxLQUFlLEVBQUUsUUFBbUI7UUFBNUMsaUJBY0M7UUFaQSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBRXBCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUM7WUFFbEMsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUUxQixJQUFJLG1CQUFRLENBQUUsUUFBUSxDQUFFLENBRXhCLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFRCx1QkFBRyxHQUFILFVBQUssSUFBWTtRQUVoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBRXRDLElBQUksRUFDSixjQUFNLE9BQUEsSUFBSSxtQkFBUSxDQUFFLElBQUksQ0FBRSxFQUFwQixDQUFvQixDQUUxQixDQUFDO0lBRUgsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxBQW5GRCxJQW1GQztBQW5GWSw4QkFBUyJ9