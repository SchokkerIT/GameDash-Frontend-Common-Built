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
//# sourceMappingURL=Uri.js.map