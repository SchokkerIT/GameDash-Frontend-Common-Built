"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.getTimestamp = function () {
        return Math.floor(Date.now() / 1000);
    };
    return Time;
}());
exports.Time = Time;
//# sourceMappingURL=Time.js.map