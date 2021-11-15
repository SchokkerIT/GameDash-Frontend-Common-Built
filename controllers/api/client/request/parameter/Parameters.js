"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameters = void 0;
var Parameter_1 = require("./Parameter");
var Parameters = /** @class */ (function () {
    function Parameters() {
        this.parameters = [];
    }
    Parameters.prototype.getAll = function () {
        return this.parameters;
    };
    Parameters.prototype.create = function (name, value, transformer) {
        if (value === void 0) { value = undefined; }
        var parameter = new Parameter_1.Parameter(name);
        if (value !== undefined) {
            parameter.setValue(value, transformer);
        }
        this.parameters.push(parameter);
        return parameter;
    };
    Parameters.prototype.get = function (name) {
        if (this.exists(name)) {
            return this.getAll().find(function (header) { return header.getName() === name; });
        }
        return this.create(name);
    };
    Parameters.prototype.exists = function (name) {
        return this.getAll().find(function (header) { return header.getName() === name; }) !== undefined;
    };
    Parameters.prototype.serialize = function () {
        var output = {};
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            output[parameter.getName()] = parameter.getValue();
        }
        return output;
    };
    return Parameters;
}());
exports.Parameters = Parameters;
//# sourceMappingURL=Parameters.js.map