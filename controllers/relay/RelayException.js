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
var RuntimeException_1 = __importDefault(require("../../exceptions/RuntimeException"));
var RelayException = /** @class */ (function (_super) {
    __extends(RelayException, _super);
    function RelayException(message) {
        return _super.call(this, message) || this;
    }
    return RelayException;
}(RuntimeException_1.default));
exports.default = RelayException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXlFeGNlcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvUmVsYXlFeGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBMkQ7QUFFM0Q7SUFBNEMsa0NBQWdCO0lBRXhELHdCQUFhLE9BQWU7ZUFFeEIsa0JBQU8sT0FBTyxDQUFFO0lBRXBCLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFSRCxDQUE0QywwQkFBZ0IsR0FRM0QifQ==