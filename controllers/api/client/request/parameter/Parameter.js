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
//# sourceMappingURL=Parameter.js.map