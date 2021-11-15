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
//# sourceMappingURL=Address.js.map