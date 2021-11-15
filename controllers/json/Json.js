"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json = void 0;
var Json = /** @class */ (function () {
    function Json() {
    }
    Json.encode = function (value, options) {
        if (options === void 0) { options = {}; }
        return JSON.stringify(value, null, options.indentation);
    };
    Json.decode = function (value) {
        return JSON.parse(value);
    };
    Json.isValid = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return Json;
}());
exports.Json = Json;
//# sourceMappingURL=Json.js.map