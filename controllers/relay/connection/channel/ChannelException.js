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
var ConnectionException_1 = __importDefault(require("../ConnectionException"));
var ChannelException = /** @class */ (function (_super) {
    __extends(ChannelException, _super);
    function ChannelException(message) {
        return _super.call(this, message) || this;
    }
    return ChannelException;
}(ConnectionException_1.default));
exports.default = ChannelException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbEV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9yZWxheS9jb25uZWN0aW9uL2NoYW5uZWwvQ2hhbm5lbEV4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtFQUF5RDtBQUV6RDtJQUE4QyxvQ0FBbUI7SUFFN0QsMEJBQWEsT0FBZTtlQUV4QixrQkFBTyxPQUFPLENBQUU7SUFFcEIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQVJELENBQThDLDZCQUFtQixHQVFoRSJ9