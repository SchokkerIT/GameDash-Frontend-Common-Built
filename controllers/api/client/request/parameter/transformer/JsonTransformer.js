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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvblRyYW5zZm9ybWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FwaS9jbGllbnQvcmVxdWVzdC9wYXJhbWV0ZXIvdHJhbnNmb3JtZXIvSnNvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE2QztBQUc3QztJQUFBO0lBUUEsQ0FBQztJQU5HLG1DQUFTLEdBQVQsVUFBVyxNQUFXO1FBRWxCLE9BQU8sV0FBSSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUVqQyxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLDBDQUFlIn0=