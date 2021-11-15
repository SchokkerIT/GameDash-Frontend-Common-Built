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
var InvalidArgumentException = /** @class */ (function (_super) {
    __extends(InvalidArgumentException, _super);
    function InvalidArgumentException(message) {
        return _super.call(this, message) || this;
    }
    return InvalidArgumentException;
}(Exception_1.default));
exports.default = InvalidArgumentException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4Y2VwdGlvbnMvSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQW9DO0FBRXBDO0lBQXNELDRDQUFTO0lBRTNELGtDQUFhLE9BQWU7ZUFFeEIsa0JBQU8sT0FBTyxDQUFFO0lBRXBCLENBQUM7SUFFTCwrQkFBQztBQUFELENBQUMsQUFSRCxDQUFzRCxtQkFBUyxHQVE5RCJ9