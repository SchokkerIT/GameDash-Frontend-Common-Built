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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9qc29uL0pzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7SUFBQTtJQXdDQSxDQUFDO0lBdENVLFdBQU0sR0FBYixVQUVJLEtBQVUsRUFDVixPQUlNO1FBSk4sd0JBQUEsRUFBQSxZQUlNO1FBSU4sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBRSxDQUFDO0lBRTlELENBQUM7SUFFTSxXQUFNLEdBQWIsVUFBZSxLQUFhO1FBRXhCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUUvQixDQUFDO0lBRU0sWUFBTyxHQUFkLFVBQWdCLEtBQVU7UUFFdEIsSUFBSTtZQUVBLElBQUksQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7U0FFdkI7UUFDRCxPQUFNLENBQUMsRUFBRTtZQUVMLE9BQU8sS0FBSyxDQUFDO1NBRWhCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLG9CQUFJIn0=