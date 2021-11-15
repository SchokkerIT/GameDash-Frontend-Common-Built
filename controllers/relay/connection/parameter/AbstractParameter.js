"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractParameter = void 0;
var AbstractParameter = /** @class */ (function () {
    function AbstractParameter(name, value) {
        this.name = name;
        this.value = String(value);
    }
    AbstractParameter.prototype.getName = function () {
        return this.name;
    };
    AbstractParameter.prototype.getValue = function () {
        return this.value;
    };
    AbstractParameter.prototype.setValue = function (value) {
        this.value = value;
    };
    return AbstractParameter;
}());
exports.AbstractParameter = AbstractParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RQYXJhbWV0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9wYXJhbWV0ZXIvQWJzdHJhY3RQYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7SUFLSSwyQkFBYSxJQUFZLEVBQUUsS0FBZ0M7UUFFdkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFakMsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFckIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFdEIsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBVSxLQUFhO1FBRW5CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBRXZCLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QnFCLDhDQUFpQiJ9