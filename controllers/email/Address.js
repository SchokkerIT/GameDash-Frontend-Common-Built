"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var email_validator_1 = __importDefault(require("email-validator"));
var Address = /** @class */ (function () {
    function Address(address) {
        this.address = address;
    }
    Address.prototype.isValid = function () {
        return email_validator_1.default.validate(this.address);
    };
    Address.prototype.toString = function () {
        return this.address;
    };
    Address.fromString = function (address) {
        return new Address(address);
    };
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9lbWFpbC9BZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9FQUE2QztBQUU3QztJQUlJLGlCQUFhLE9BQWU7UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFM0IsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFFSSxPQUFPLHlCQUFjLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztJQUVuRCxDQUFDO0lBRUQsMEJBQVEsR0FBUjtRQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUV4QixDQUFDO0lBRU0sa0JBQVUsR0FBakIsVUFBbUIsT0FBZTtRQUU5QixPQUFPLElBQUksT0FBTyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0lBRWxDLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSwwQkFBTyJ9