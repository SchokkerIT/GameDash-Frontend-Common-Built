"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var Pagination = /** @class */ (function () {
    function Pagination(page, perPage) {
        if (perPage === void 0) { perPage = 25; }
        this.page = page;
        this.perPage = perPage;
    }
    Pagination.prototype.getPage = function () {
        return this.page;
    };
    Pagination.prototype.getPerPage = function () {
        return this.perPage;
    };
    Pagination.create = function (page, perPage) {
        return new Pagination(page, perPage);
    };
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map