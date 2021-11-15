"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
var Parameter = /** @class */ (function () {
    function Parameter(name) {
        this.name = name;
    }
    Parameter.prototype.getName = function () {
        return this.name;
    };
    Parameter.prototype.getValue = function () {
        return this.value;
    };
    Parameter.prototype.setValue = function (value, transformer) {
        if (transformer) {
            value = transformer.transform(value);
        }
        this.value = value;
    };
    return Parameter;
}());
exports.Parameter = Parameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FwaS9jbGllbnQvcmVxdWVzdC9wYXJhbWV0ZXIvUGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBS0ksbUJBQWEsSUFBWTtRQUVyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUV0QixDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFVLEtBQVUsRUFBRSxXQUEwQjtRQUU1QyxJQUFJLFdBQVcsRUFBRztZQUVkLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBRSxDQUFDO1NBRTFDO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFFdkIsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSw4QkFBUyJ9