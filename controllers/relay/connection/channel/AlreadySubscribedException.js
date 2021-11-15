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
var ChannelException_1 = __importDefault(require("./ChannelException"));
var AlreadySubscribedException = /** @class */ (function (_super) {
    __extends(AlreadySubscribedException, _super);
    function AlreadySubscribedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AlreadySubscribedException;
}(ChannelException_1.default));
exports.default = AlreadySubscribedException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxyZWFkeVN1YnNjcmliZWRFeGNlcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9jaGFubmVsL0FscmVhZHlTdWJzY3JpYmVkRXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQWtEO0FBRWxEO0lBQXdELDhDQUFnQjtJQUF4RTs7SUFBMEUsQ0FBQztJQUFELGlDQUFDO0FBQUQsQ0FBQyxBQUEzRSxDQUF3RCwwQkFBZ0IsR0FBRyJ9