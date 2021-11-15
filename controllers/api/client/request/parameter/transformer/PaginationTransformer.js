"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationTransformer = void 0;
var Json_1 = require("controllers/json/Json");
var PaginationTransformer = /** @class */ (function () {
    function PaginationTransformer() {
    }
    PaginationTransformer.prototype.transform = function (pagination) {
        return Json_1.Json.encode({
            page: pagination.getPage(),
            perPage: pagination.getPerPage()
        });
    };
    return PaginationTransformer;
}());
exports.PaginationTransformer = PaginationTransformer;
//# sourceMappingURL=PaginationTransformer.js.map