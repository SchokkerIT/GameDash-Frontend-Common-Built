"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var Header = /** @class */ (function () {
    function Header(name, value) {
        if (value === void 0) { value = undefined; }
        this.name = name;
        this.value = value;
    }
    Header.prototype.getName = function () {
        return this.name;
    };
    Header.prototype.getValue = function () {
        return this.value;
    };
    Header.prototype.setValue = function (value) {
        this.value = value;
    };
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=Header.js.map