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
var Exception_1 = __importDefault(require("./Exception"));
var NotImplementedException = /** @class */ (function (_super) {
    __extends(NotImplementedException, _super);
    function NotImplementedException(message) {
        if (message === void 0) { message = 'Not implemented'; }
        return _super.call(this, message) || this;
    }
    return NotImplementedException;
}(Exception_1.default));
exports.default = NotImplementedException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90SW1wbGVtZW50ZWRFeGNlcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhjZXB0aW9ucy9Ob3RJbXBsZW1lbnRlZEV4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFvQztBQUVwQztJQUFxRCwyQ0FBUztJQUUxRCxpQ0FBYSxPQUFtQztRQUFuQyx3QkFBQSxFQUFBLDJCQUFtQztlQUU1QyxrQkFBTyxPQUFPLENBQUU7SUFFcEIsQ0FBQztJQUVMLDhCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXFELG1CQUFTLEdBUTdEIn0=