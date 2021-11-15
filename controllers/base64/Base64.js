"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64 = void 0;
var js_base64_1 = require("js-base64");
var Base64 = /** @class */ (function () {
    function Base64() {
    }
    Base64.encode = function (value) {
        return js_base64_1.Base64.encode(value);
    };
    Base64.decode = function (value) {
        return js_base64_1.Base64.decode(value);
    };
    Base64.isValid = function (value) {
        return this.encode(this.decode(value)) === value;
    };
    return Base64;
}());
exports.Base64 = Base64;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZTY0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2Jhc2U2NC9CYXNlNjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWdEO0FBRWhEO0lBQUE7SUFvQkEsQ0FBQztJQWxCVSxhQUFNLEdBQWIsVUFBZSxLQUFVO1FBRXJCLE9BQU8sa0JBQVMsQ0FBQyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFckMsQ0FBQztJQUVNLGFBQU0sR0FBYixVQUFlLEtBQWE7UUFFeEIsT0FBTyxrQkFBUyxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUVyQyxDQUFDO0lBRU0sY0FBTyxHQUFkLFVBQWdCLEtBQVU7UUFFdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUUsS0FBSyxLQUFLLENBQUM7SUFFekQsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLHdCQUFNIn0=