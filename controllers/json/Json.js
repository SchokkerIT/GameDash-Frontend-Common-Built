"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json = void 0;
var Json = /** @class */ (function () {
    function Json() {
    }
    Json.encode = function (value, options) {
        if (options === void 0) { options = {}; }
        return JSON.stringify(value, null, options.indentation);
    };
    Json.decode = function (value) {
        return JSON.parse(value);
    };
    Json.isValid = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return Json;
}());
exports.Json = Json;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9qc29uL0pzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7SUFBQTtJQXdDQSxDQUFDO0lBdENVLFdBQU0sR0FBYixVQUVJLEtBQVEsRUFDUixPQUlNO1FBSk4sd0JBQUEsRUFBQSxZQUlNO1FBSU4sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBRSxDQUFDO0lBRTlELENBQUM7SUFFTSxXQUFNLEdBQWIsVUFBd0IsS0FBYTtRQUVqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFL0IsQ0FBQztJQUVNLFlBQU8sR0FBZCxVQUFnQixLQUFVO1FBRXRCLElBQUk7WUFFQSxJQUFJLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1NBRXZCO1FBQ0QsT0FBTSxDQUFDLEVBQUU7WUFFTCxPQUFPLEtBQUssQ0FBQztTQUVoQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxvQkFBSSJ9