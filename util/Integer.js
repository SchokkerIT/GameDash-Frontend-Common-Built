"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = void 0;
var Integer = /** @class */ (function () {
    function Integer() {
    }
    Integer.pad = function (value, size) {
        var s = value + '';
        while (s.length < size)
            s = '0' + s;
        return s;
    };
    Integer.getRandom = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Integer;
}());
exports.Integer = Integer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL0ludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7SUFBQTtJQW9CQSxDQUFDO0lBbEJPLFdBQUcsR0FBVixVQUFZLEtBQWEsRUFBRSxJQUFZO1FBRXRDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUk7WUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVwQyxPQUFPLENBQUMsQ0FBQztJQUViLENBQUM7SUFFTSxpQkFBUyxHQUFoQixVQUFrQixHQUFXLEVBQUUsR0FBVztRQUV6QyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUU3RCxDQUFDO0lBRUYsY0FBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksMEJBQU8ifQ==