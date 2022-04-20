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
var IntervalException_1 = __importDefault(require("./IntervalException"));
var IntervalNotRunningException = /** @class */ (function (_super) {
    __extends(IntervalNotRunningException, _super);
    function IntervalNotRunningException(message) {
        return _super.call(this, message) || this;
    }
    return IntervalNotRunningException;
}(IntervalException_1.default));
exports.default = IntervalNotRunningException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJ2YWxOb3RSdW5uaW5nRXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2ludGVydmFsL0ludGVydmFsTm90UnVubmluZ0V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFvRDtBQUVwRDtJQUF5RCwrQ0FBaUI7SUFFdEUscUNBQWEsT0FBZTtlQUV4QixrQkFBTyxPQUFPLENBQUU7SUFFcEIsQ0FBQztJQUVMLGtDQUFDO0FBQUQsQ0FBQyxBQVJELENBQXlELDJCQUFpQixHQVF6RSJ9