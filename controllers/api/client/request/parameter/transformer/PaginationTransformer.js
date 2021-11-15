"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationTransformer = void 0;
var Json_1 = require("../../../../../json/Json");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvblRyYW5zZm9ybWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FwaS9jbGllbnQvcmVxdWVzdC9wYXJhbWV0ZXIvdHJhbnNmb3JtZXIvUGFnaW5hdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlEQUE2QztBQUc3QztJQUFBO0lBYUEsQ0FBQztJQVhHLHlDQUFTLEdBQVQsVUFBVyxVQUFzQjtRQUU3QixPQUFPLFdBQUksQ0FBQyxNQUFNLENBQUM7WUFFZixJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUMxQixPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRTtTQUVuQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLHNEQUFxQiJ9