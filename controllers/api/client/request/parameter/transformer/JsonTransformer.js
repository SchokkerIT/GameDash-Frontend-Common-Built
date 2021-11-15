"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
var Json_1 = require("controllers/json/Json");
var JsonTransformer = /** @class */ (function () {
    function JsonTransformer() {
    }
    JsonTransformer.prototype.transform = function (object) {
        return Json_1.Json.encode(object);
    };
    return JsonTransformer;
}());
exports.JsonTransformer = JsonTransformer;
//# sourceMappingURL=JsonTransformer.js.map