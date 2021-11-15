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
var RuntimeException = /** @class */ (function (_super) {
    __extends(RuntimeException, _super);
    function RuntimeException(message) {
        return _super.call(this, message) || this;
    }
    return RuntimeException;
}(Exception_1.default));
exports.default = RuntimeException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVudGltZUV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGNlcHRpb25zL1J1bnRpbWVFeGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBb0M7QUFFcEM7SUFBOEMsb0NBQVM7SUFFbkQsMEJBQWEsT0FBZTtlQUV4QixrQkFBTyxPQUFPLENBQUU7SUFFcEIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQVJELENBQThDLG1CQUFTLEdBUXREIn0=