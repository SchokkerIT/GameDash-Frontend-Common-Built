"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var List = /** @class */ (function () {
    function List(values) {
        if (values === void 0) { values = []; }
        this.values = values;
    }
    List.prototype.add = function (value) {
        this.values.push(value);
    };
    List.prototype.size = function () {
        return this.values.length;
    };
    List.prototype.get = function (index) {
        return this.values[index];
    };
    List.prototype.remove = function (value) {
        this.values = this.values.filter(function (_value) { return _value !== value; });
    };
    List.prototype.clear = function () {
        this.values = [];
    };
    List.prototype.includes = function (value) {
        return this.values.includes(value);
    };
    List.prototype.toArray = function () {
        return this.values;
    };
    List.prototype[Symbol.iterator] = function () {
        return this.values;
    };
    ;
    return List;
}());
exports.List = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb2x5ZmlsbHMvbGlzdC9MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBSUksY0FBYSxNQUFnQjtRQUFoQix1QkFBQSxFQUFBLFdBQWdCO1FBRXpCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRXpCLENBQUM7SUFFRCxrQkFBRyxHQUFILFVBQUssS0FBUTtRQUVULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBRTlCLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUU5QixDQUFDO0lBRUQsa0JBQUcsR0FBSCxVQUFLLEtBQWE7UUFFZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFaEMsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBUSxLQUFRO1FBRVosSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sS0FBSyxLQUFLLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUVqRSxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVUsS0FBUTtRQUVkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFekMsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFdkIsQ0FBQztJQUVELGVBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFqQjtRQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUV2QixDQUFDO0lBQUEsQ0FBQztJQUVOLFdBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBMURZLG9CQUFJIn0=