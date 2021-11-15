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
            remove: function () { return delete Implementations.implementations[index]; }
        };
    };
    Implementations.remove = function (index) {
        delete Implementations.implementations[index];
    };
    Implementations.clear = function () {
        Implementations.getAll().forEach(function (implementation) { return implementation.clear(); });
    };
    Implementations.implementations = [];
    return Implementations;
}());
exports.Implementations = Implementations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wbGVtZW50YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NhY2hlL0ltcGxlbWVudGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtJQUFBO0lBc0NBLENBQUM7SUFsQ1Usc0JBQU0sR0FBYjtRQUVJLE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBQztJQUUzQyxDQUFDO0lBRU0sbUJBQUcsR0FBVixVQUFZLGNBQStCO1FBTXZDLElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLGNBQWMsQ0FBRSxDQUFDO1FBRXJFLE9BQU87WUFFSCxNQUFNLEVBQUUsY0FBTSxPQUFBLE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBRSxLQUFLLENBQUUsRUFBL0MsQ0FBK0M7U0FFaEUsQ0FBQztJQUVOLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWUsS0FBYTtRQUV4QixPQUFPLGVBQWUsQ0FBQyxlQUFlLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFcEQsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFFSSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFFL0UsQ0FBQztJQWxDdUIsK0JBQWUsR0FBc0IsRUFBRSxDQUFDO0lBb0NwRSxzQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLDBDQUFlIn0=