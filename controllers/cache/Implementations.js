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
        console.trace('Register implementation!');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wbGVtZW50YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NhY2hlL0ltcGxlbWVudGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUFBO0lBZ0VBLENBQUM7SUE1RFUsc0JBQU0sR0FBYjtRQUVJLE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBQztJQUUzQyxDQUFDO0lBRU0sbUJBQUcsR0FBVixVQUFZLGNBQStCO1FBRXZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUxQyxJQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxjQUFjLENBQUUsQ0FBQztRQUVyRSxPQUFPO1lBRUgsT0FBTyxFQUFFO2dCQUVMLGVBQWUsQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFFLENBQUM7WUFFM0MsQ0FBQztTQUVKLENBQUM7SUFFTixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFlLGNBQStCO1FBRTFDLElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUUsY0FBYyxDQUFFLENBQUM7UUFFekQsZUFBZSxDQUFDLGFBQWEsQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUUzQyxDQUFDO0lBRU0sNkJBQWEsR0FBcEIsVUFBc0IsS0FBYTtRQUUvQixPQUFPLGVBQWUsQ0FBQyxlQUFlLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFcEQsQ0FBQztJQUVNLHNCQUFNLEdBQWIsVUFBZSxjQUErQjtRQUUxQyxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUUsY0FBYyxDQUFFLElBQUksSUFBSSxDQUFDO0lBRTlELENBQUM7SUFFYyx3QkFBUSxHQUF2QixVQUF5QixjQUErQjtRQUVwRCxPQUFPLGVBQWUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUEsZUFBZSxJQUFJLE9BQUEsQ0FFaEUsZUFBZSxLQUFLLGNBQWMsQ0FBQyxFQUY2QixDQUU3QixDQUV0QyxDQUFDO0lBRU4sQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFFSSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFFL0UsQ0FBQztJQTVEdUIsK0JBQWUsR0FBc0IsRUFBRSxDQUFDO0lBOERwRSxzQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLDBDQUFlIn0=