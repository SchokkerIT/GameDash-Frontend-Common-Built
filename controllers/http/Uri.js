"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uri = void 0;
var valid_url_1 = __importDefault(require("valid-url"));
var Uri = /** @class */ (function () {
    function Uri(uri) {
        this.uri = uri;
    }
    Uri.prototype.isValid = function () {
        return valid_url_1.default.isUri(this.toString());
    };
    Uri.prototype.setUri = function (uri) {
        this.uri = uri;
    };
    Uri.prototype.addQueryParameter = function (name, value) {
        var parameters = new URL(this.toString());
        parameters.searchParams.append(name, value);
        this.setUri(parameters.toString());
    };
    Uri.prototype.toString = function () {
        return this.uri;
    };
    Uri.fromString = function (string) {
        return new Uri(string);
    };
    return Uri;
}());
exports.Uri = Uri;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2h0dHAvVXJpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUFpQztBQUVqQztJQUlJLGFBQWEsR0FBVztRQUVwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUVuQixDQUFDO0lBRUQscUJBQU8sR0FBUDtRQUVJLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUM7SUFFN0MsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBUSxHQUFXO1FBRWYsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFbkIsQ0FBQztJQUVELCtCQUFpQixHQUFqQixVQUFtQixJQUFZLEVBQUUsS0FBYTtRQUUxQyxJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztRQUUxQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztJQUV6QyxDQUFDO0lBRUQsc0JBQVEsR0FBUjtRQUVJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUVwQixDQUFDO0lBRU0sY0FBVSxHQUFqQixVQUFtQixNQUFjO1FBRTdCLE9BQU8sSUFBSSxHQUFHLENBQUUsTUFBTSxDQUFFLENBQUM7SUFFN0IsQ0FBQztJQUVMLFVBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLGtCQUFHIn0=