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
//# sourceMappingURL=AbstractParameter.js.map