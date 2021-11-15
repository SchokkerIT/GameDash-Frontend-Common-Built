"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = void 0;
var Header_1 = require("./Header");
var Headers = /** @class */ (function () {
    function Headers() {
        this.headers = [];
    }
    Headers.prototype.getAll = function () {
        return this.headers;
    };
    Headers.prototype.create = function (name, value) {
        if (value === void 0) { value = undefined; }
        var header = new Header_1.Header(name, value);
        this.headers.push(header);
        return header;
    };
    Headers.prototype.get = function (name) {
        if (this.exists(name)) {
            return this.getAll().find(function (header) { return header.getName() === name; });
        }
        return this.create(name);
    };
    Headers.prototype.exists = function (name) {
        return this.getAll().find(function (header) { return header.getName() === name; }) !== undefined;
    };
    Headers.prototype.serialize = function () {
        var output = {};
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var header = _a[_i];
            output[header.getName()] = header.getValue();
        }
        return output;
    };
    return Headers;
}());
exports.Headers = Headers;
//# sourceMappingURL=Headers.js.map