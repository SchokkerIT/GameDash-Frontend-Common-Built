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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hcGkvY2xpZW50L3JlcXVlc3QvcGFyYW1ldGVyL1BhcmFtZXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXdDO0FBR3hDO0lBQUE7UUFFWSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztJQXdEekMsQ0FBQztJQXRERywyQkFBTSxHQUFOO1FBRUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRTNCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQVEsSUFBWSxFQUFFLEtBQWlCLEVBQUUsV0FBMEI7UUFBN0Msc0JBQUEsRUFBQSxpQkFBaUI7UUFFbkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRXhDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRztZQUV0QixTQUFTLENBQUMsUUFBUSxDQUFFLEtBQUssRUFBRSxXQUFXLENBQUUsQ0FBQztTQUU1QztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBRSxDQUFDO1FBRWxDLE9BQU8sU0FBUyxDQUFDO0lBRXJCLENBQUM7SUFFRCx3QkFBRyxHQUFILFVBQUssSUFBWTtRQUViLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsRUFBRztZQUV0QixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUF6QixDQUF5QixDQUFDLENBQUM7U0FFbEU7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFFLENBQUM7SUFFL0IsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBUSxJQUFZO1FBRWhCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQXpCLENBQXlCLENBQUMsS0FBSyxTQUFTLENBQUM7SUFFakYsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFFSSxJQUFJLE1BQU0sR0FBNkIsRUFBRSxDQUFDO1FBRXRDLEtBQXNCLFVBQWEsRUFBYixLQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFHO1lBQWpDLElBQUksU0FBUyxTQUFBO1lBRWQsTUFBTSxDQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUV4RDtRQUVMLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksZ0NBQVUifQ==