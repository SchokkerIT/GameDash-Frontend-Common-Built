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
var NotConnectedException = /** @class */ (function (_super) {
    __extends(NotConnectedException, _super);
    function NotConnectedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotConnectedException;
}(ConnectionException_1.default));
exports.default = NotConnectedException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90Q29ubmVjdGVkRXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3JlbGF5L2Nvbm5lY3Rpb24vTm90Q29ubmVjdGVkRXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdEO0FBRXhEO0lBQW1ELHlDQUFtQjtJQUF0RTs7SUFBd0UsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQUF6RSxDQUFtRCw2QkFBbUIsR0FBRyJ9