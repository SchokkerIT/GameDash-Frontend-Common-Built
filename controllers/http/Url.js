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
exports.Url = void 0;
var validator_1 = __importDefault(require("validator"));
var Uri_1 = require("./Uri");
var Url = /** @class */ (function (_super) {
    __extends(Url, _super);
    function Url() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Url.prototype.isValid = function () {
        return validator_1.default.isURL(this.toString());
    };
    Url.fromString = function (value) {
        return new Url(value);
    };
    return Url;
}(Uri_1.Uri));
exports.Url = Url;
//# sourceMappingURL=Url.js.map