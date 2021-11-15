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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYXBpL2NsaWVudC9yZXF1ZXN0L3Jlc3BvbnNlL1Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBS0ksa0JBQWEsUUFBYSxFQUFFLFVBQWtCO1FBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBRWpDLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXpCLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUV6QyxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFdkMsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFFSSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRXZDLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXpCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBRUksSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTFCLE9BQU8sR0FBRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUM7SUFFekQsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFFM0IsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDO0FBeERZLDRCQUFRIn0=