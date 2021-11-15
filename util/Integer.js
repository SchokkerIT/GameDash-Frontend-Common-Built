"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = void 0;
var Integer = /** @class */ (function () {
    function Integer() {
    }
    Integer.pad = function (value, size) {
        var s = value + '';
        while (s.length < size)
            s = '0' + s;
        return s;
    };
    Integer.getRandom = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Integer;
}());
exports.Integer = Integer;
//# sourceMappingURL=Integer.js.map