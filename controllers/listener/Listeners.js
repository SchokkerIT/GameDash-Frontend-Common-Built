"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listeners = void 0;
var Listeners_1 = require("./nonStatic/Listeners");
var Listener_1 = require("./Listener");
var ListenerSingletonMap_1 = require("./ListenerSingletonMap");
var Callback_1 = require("./Callback");
var Listeners = /** @class */ (function () {
    function Listeners() {
    }
    Listeners.getAll = function () {
        return Object.entries(Listeners.listenerSingletonMap.getAll()).map(function (_a) {
            var listener = _a[1];
            return listener;
        });
    };
    Listeners.add = function (name, callback) {
        var Listener = Listeners.get(name);
        return Listener.addCallback(new Callback_1.Callback(callback));
    };
    Listeners.get = function (name) {
        return Listeners.listenerSingletonMap.handle(name, function () { return new Listener_1.Listener(name); });
    };
    Listeners.NonStatic = Listeners_1.Listeners;
    Listeners.listenerSingletonMap = new ListenerSingletonMap_1.ListenerSingletonMap();
    return Listeners;
}());
exports.Listeners = Listeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGVuZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVyL0xpc3RlbmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBd0U7QUFDeEUsdUNBQXNDO0FBQ3RDLCtEQUE4RDtBQUk5RCx1Q0FBaUQ7QUFFakQ7SUFBQTtJQW1DQSxDQUFDO0lBN0JPLGdCQUFNLEdBQWI7UUFFQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUUsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFFLENBQUMsR0FBRyxDQUFDLFVBQUUsRUFBYztnQkFBVixRQUFRLFFBQUE7WUFBUSxPQUFBLFFBQVE7UUFBUixDQUFRLENBQUMsQ0FBQztJQUV0RyxDQUFDO0lBRU0sYUFBRyxHQUFWLFVBQVksSUFBWSxFQUFFLFFBQW1CO1FBRTVDLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUM7UUFFdkMsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUUxQixJQUFJLG1CQUFRLENBQUUsUUFBUSxDQUFFLENBRXhCLENBQUM7SUFFSCxDQUFDO0lBRU0sYUFBRyxHQUFWLFVBQVksSUFBWTtRQUV2QixPQUFPLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBRTNDLElBQUksRUFDSixjQUFNLE9BQUEsSUFBSSxtQkFBUSxDQUFFLElBQUksQ0FBRSxFQUFwQixDQUFvQixDQUUxQixDQUFDO0lBRUgsQ0FBQztJQS9CTSxtQkFBUyxHQUFHLHFCQUFrQixDQUFDO0lBRXJCLDhCQUFvQixHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztJQStCcEUsZ0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSw4QkFBUyJ9