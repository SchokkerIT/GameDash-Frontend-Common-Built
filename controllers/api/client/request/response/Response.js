"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
var ResponseException_1 = __importDefault(require("./ResponseException"));
var Response = /** @class */ (function () {
    function Response(response, statusCode) {
        this.response = response;
        this.statusCode = statusCode;
    }
    Response.prototype.getNativeResponse = function () {
        return this.nativeResponse;
    };
    Response.prototype.setNativeResponse = function (response) {
        this.nativeResponse = response;
    };
    Response.prototype.getRaw = function () {
        return this.response;
    };
    Response.prototype.getErrorMessage = function () {
        var _a, _b;
        return (_b = (_a = this.getAsJson()) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.status;
    };
    Response.prototype.getErrorCode = function () {
        var _a, _b;
        return (_b = (_a = this.getAsJson()) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.code;
    };
    Response.prototype.getErrorData = function () {
        var _a, _b;
        return (_b = (_a = this.getAsJson()) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.data;
    };
    Response.prototype.getAsJson = function () {
        if (typeof this.response === 'undefined') {
            throw new ResponseException_1.default("No response was returned");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYXBpL2NsaWVudC9yZXF1ZXN0L3Jlc3BvbnNlL1Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBFQUFvRDtBQUVwRDtJQU1JLGtCQUFhLFFBQW1CLEVBQUUsVUFBa0I7UUFFaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFFakMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUVJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUUvQixDQUFDO0lBRUQsb0NBQWlCLEdBQWpCLFVBQW1CLFFBQXlCO1FBRXhDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO0lBRW5DLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXpCLENBQUM7SUFFRCxrQ0FBZSxHQUFmOztRQUVJLE9BQU8sTUFBQSxNQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsMENBQUUsS0FBSywwQ0FBRSxNQUFNLENBQUM7SUFFM0MsQ0FBQztJQUVELCtCQUFZLEdBQVo7O1FBRUksT0FBTyxNQUFBLE1BQUEsSUFBSSxDQUFDLFNBQVMsRUFBRSwwQ0FBRSxLQUFLLDBDQUFFLElBQUksQ0FBQztJQUV6QyxDQUFDO0lBRUQsK0JBQVksR0FBWjs7UUFFSSxPQUFPLE1BQUEsTUFBQSxJQUFJLENBQUMsU0FBUyxFQUFFLDBDQUFFLEtBQUssMENBQUUsSUFBSSxDQUFDO0lBRXpDLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBRUksSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFHO1lBRXZDLE1BQU0sSUFBSSwyQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBRTNEO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXpCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBRUksSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTFCLE9BQU8sR0FBRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFFLEdBQVUsQ0FBRSxDQUFDLENBQUM7SUFFaEUsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFFM0IsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDO0FBM0VZLDRCQUFRIn0=