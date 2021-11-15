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
var RelayException_1 = __importDefault(require("../RelayException"));
var ConnectionException = /** @class */ (function (_super) {
    __extends(ConnectionException, _super);
    function ConnectionException(message) {
        return _super.call(this, message) || this;
    }
    return ConnectionException;
}(RelayException_1.default));
exports.default = ConnectionException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbkV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9yZWxheS9jb25uZWN0aW9uL0Nvbm5lY3Rpb25FeGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBOEQ7QUFFOUQ7SUFBaUQsdUNBQWM7SUFFM0QsNkJBQWEsT0FBZTtlQUV4QixrQkFBTyxPQUFPLENBQUU7SUFFcEIsQ0FBQztJQUVMLDBCQUFDO0FBQUQsQ0FBQyxBQVJELENBQWlELHdCQUFjLEdBUTlEIn0=