"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var FlagManager_1 = require("./flag/FlagManager");
var Country = /** @class */ (function () {
    function Country(code, name) {
        this.flagManager = new FlagManager_1.FlagManager(this);
        this.code = code.toUpperCase();
        this.name = name;
    }
    Country.prototype.getCode = function () {
        return this.code;
    };
    Country.prototype.getName = function () {
        return this.name;
    };
    Country.prototype.getFlagManager = function () {
        return this.flagManager;
    };
    return Country;
}());
exports.Country = Country;
//# sourceMappingURL=Country.js.map