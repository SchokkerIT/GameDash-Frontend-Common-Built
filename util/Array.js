"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array = void 0;
var Array = /** @class */ (function () {
    function Array() {
    }
    Array.getClosestNumber = function (needle, numbers) {
        return numbers.reduce(function (a, b) { return (Math.abs(b - needle) < Math.abs(a - needle) ? b : a); });
    };
    return Array;
}());
exports.Array = Array;
//# sourceMappingURL=Array.js.map