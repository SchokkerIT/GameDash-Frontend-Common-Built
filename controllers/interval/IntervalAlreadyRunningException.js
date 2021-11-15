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
var IntervalAlreadyRunningException = /** @class */ (function (_super) {
    __extends(IntervalAlreadyRunningException, _super);
    function IntervalAlreadyRunningException(message) {
        return _super.call(this, message) || this;
    }
    return IntervalAlreadyRunningException;
}(IntervalException_1.default));
exports.default = IntervalAlreadyRunningException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJ2YWxBbHJlYWR5UnVubmluZ0V4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9pbnRlcnZhbC9JbnRlcnZhbEFscmVhZHlSdW5uaW5nRXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQW9EO0FBRXBEO0lBQTZELG1EQUFpQjtJQUUxRSx5Q0FBYSxPQUFlO2VBRXhCLGtCQUFPLE9BQU8sQ0FBRTtJQUVwQixDQUFDO0lBRUwsc0NBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBNkQsMkJBQWlCLEdBUTdFIn0=