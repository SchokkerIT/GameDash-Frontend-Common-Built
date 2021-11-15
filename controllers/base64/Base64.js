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
//# sourceMappingURL=Base64.js.map