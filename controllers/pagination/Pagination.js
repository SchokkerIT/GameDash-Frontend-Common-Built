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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9wYWdpbmF0aW9uL1BhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7SUFLSSxvQkFBYSxJQUFZLEVBQUUsT0FBb0I7UUFBcEIsd0JBQUEsRUFBQSxZQUFvQjtRQUUzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUUzQixDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUV4QixDQUFDO0lBRU0saUJBQU0sR0FBYixVQUFlLElBQVksRUFBRSxPQUFlO1FBRXhDLE9BQU8sSUFBSSxVQUFVLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBRSxDQUFDO0lBRTNDLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksZ0NBQVUifQ==