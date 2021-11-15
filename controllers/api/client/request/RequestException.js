"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __importDefault(require("exceptions/Exception"));
var RequestException = /** @class */ (function (_super) {
    __extends(RequestException, _super);
    function RequestException(message, code, httpStatusCode) {
        if (code === void 0) { code = null; }
        var _this = _super.call(this, message, code) || this;
        _this.httpStatusCode = httpStatusCode;
        return _this;
    }
    RequestException.prototype.getHttpStatusCode = function () {
        return this.httpStatusCode;
    };
    RequestException.prototype.hasHttpStatusCode = function () {
        return this.httpStatusCode !== null;
    };
    return RequestException;
}(Exception_1.default));
exports.default = RequestException;
//# sourceMappingURL=RequestException.js.map