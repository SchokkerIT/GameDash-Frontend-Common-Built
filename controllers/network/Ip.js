"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ip = void 0;
var Ip = /** @class */ (function () {
    function Ip(ip) {
        this._ip = ip;
    }
    Ip.prototype.toString = function () {
        return this._ip;
    };
    Ip.fromString = function (ip) {
        return new Ip(ip);
    };
    return Ip;
}());
exports.Ip = Ip;
//# sourceMappingURL=Ip.js.map