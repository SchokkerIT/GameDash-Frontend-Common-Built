"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array = void 0;
var Array = /** @class */ (function () {
    function Array() {
    }
    Array.getClosestNumber = function (needle, numbers) {
        return numbers.reduce(function (a, b) { return (Math.abs(b - needle) < Math.abs(a - needle) ? b : a); });
    };
    return Array;
}());
exports.Array = Array;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9BcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtJQUFBO0lBWUEsQ0FBQztJQVZVLHNCQUFnQixHQUF2QixVQUF5QixNQUFjLEVBQUUsT0FBaUI7UUFFdEQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBRTVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FFdEQsRUFKK0IsQ0FJL0IsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLHNCQUFLIn0=