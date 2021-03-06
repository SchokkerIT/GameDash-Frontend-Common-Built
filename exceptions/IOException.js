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
var RuntimeException_1 = __importDefault(require("./RuntimeException"));
var IOException = /** @class */ (function (_super) {
    __extends(IOException, _super);
    function IOException(message) {
        return _super.call(this, message) || this;
    }
    return IOException;
}(RuntimeException_1.default));
exports.default = IOException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSU9FeGNlcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhjZXB0aW9ucy9JT0V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUFrRDtBQUVsRDtJQUF5QywrQkFBZ0I7SUFFckQscUJBQWEsT0FBZTtlQUV4QixrQkFBTyxPQUFPLENBQUU7SUFFcEIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXlDLDBCQUFnQixHQVF4RCJ9