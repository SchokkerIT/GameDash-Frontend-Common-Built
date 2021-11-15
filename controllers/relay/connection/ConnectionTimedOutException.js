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
var ConnectionException_1 = __importDefault(require("./ConnectionException"));
var ConnectionTimedOutException = /** @class */ (function (_super) {
    __extends(ConnectionTimedOutException, _super);
    function ConnectionTimedOutException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConnectionTimedOutException;
}(ConnectionException_1.default));
exports.default = ConnectionTimedOutException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvblRpbWVkT3V0RXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3JlbGF5L2Nvbm5lY3Rpb24vQ29ubmVjdGlvblRpbWVkT3V0RXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdEO0FBRXhEO0lBQXlELCtDQUFtQjtJQUE1RTs7SUFBOEUsQ0FBQztJQUFELGtDQUFDO0FBQUQsQ0FBQyxBQUEvRSxDQUF5RCw2QkFBbUIsR0FBRyJ9