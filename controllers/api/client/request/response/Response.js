"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
var Response = /** @class */ (function () {
    function Response(response, statusCode) {
        this.response = response;
        this.statusCode = statusCode;
    }
    Response.prototype.getRaw = function () {
        return this.response;
    };
    Response.prototype.getErrorMessage = function () {
        return this.getAsJson().error.status;
    };
    Response.prototype.getErrorCode = function () {
        return this.getAsJson().error.code;
    };
    Response.prototype.getErrorData = function () {
        return this.getAsJson().error.data;
    };
    Response.prototype.getAsJson = function () {
        return this.response;
    };
    Response.prototype.getAsBlob = function () {
        var raw = this.getRaw();
        return raw instanceof Blob ? raw : new Blob([raw]);
    };
    Response.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    return Response;
}());
exports.Response = Response;
//# sourceMappingURL=Response.js.map