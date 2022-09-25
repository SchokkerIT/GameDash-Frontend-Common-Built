"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementations = void 0;
var Implementations = /** @class */ (function () {
    function Implementations() {
    }
    Implementations.getAll = function () {
        return Implementations.implementations;
    };
    Implementations.add = function (implementation) {
        var index = Implementations.implementations.push(implementation);
        return {
            destroy: function () {
                Implementations.removeByIndex(index);
            }
        };
    };
    Implementations.remove = function (implementation) {
        var index = Implementations.getIndex(implementation);
        Implementations.removeByIndex(index);
    };
    Implementations.removeByIndex = function (index) {
        delete Implementations.implementations[index];
    };
    Implementations.exists = function (implementation) {
        return Implementations.getIndex(implementation) != null;
    };
    Implementations.getIndex = function (implementation) {
        return Implementations.implementations.findIndex(function (_implementation) { return (_implementation === implementation); });
    };
    Implementations.clear = function () {
        Implementations.getAll().forEach(function (implementation) { return implementation.clear(); });
    };
    Implementations.implementations = [];
    return Implementations;
}());
exports.Implementations = Implementations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wbGVtZW50YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NhY2hlL0ltcGxlbWVudGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUFBO0lBOERBLENBQUM7SUExRFUsc0JBQU0sR0FBYjtRQUVJLE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBQztJQUUzQyxDQUFDO0lBRU0sbUJBQUcsR0FBVixVQUFZLGNBQStCO1FBRXZDLElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLGNBQWMsQ0FBRSxDQUFDO1FBRXJFLE9BQU87WUFFSCxPQUFPLEVBQUU7Z0JBRUwsZUFBZSxDQUFDLGFBQWEsQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUUzQyxDQUFDO1NBRUosQ0FBQztJQUVOLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWUsY0FBK0I7UUFFMUMsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBRSxjQUFjLENBQUUsQ0FBQztRQUV6RCxlQUFlLENBQUMsYUFBYSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBRTNDLENBQUM7SUFFTSw2QkFBYSxHQUFwQixVQUFzQixLQUFhO1FBRS9CLE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUVwRCxDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFlLGNBQStCO1FBRTFDLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBRSxjQUFjLENBQUUsSUFBSSxJQUFJLENBQUM7SUFFOUQsQ0FBQztJQUVjLHdCQUFRLEdBQXZCLFVBQXlCLGNBQStCO1FBRXBELE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQSxlQUFlLElBQUksT0FBQSxDQUVoRSxlQUFlLEtBQUssY0FBYyxDQUFDLEVBRjZCLENBRTdCLENBRXRDLENBQUM7SUFFTixDQUFDO0lBRU0scUJBQUssR0FBWjtRQUVJLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUUvRSxDQUFDO0lBMUR1QiwrQkFBZSxHQUFzQixFQUFFLENBQUM7SUE0RHBFLHNCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksMENBQWUifQ==