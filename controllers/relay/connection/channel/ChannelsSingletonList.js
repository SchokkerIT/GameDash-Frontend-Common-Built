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
exports.ChannelsSingletonList = void 0;
var SingletonList_1 = __importDefault(require("../../../singleton/SingletonList"));
var Channel_1 = require("./Channel");
var ChannelsSingletonList = /** @class */ (function (_super) {
    __extends(ChannelsSingletonList, _super);
    function ChannelsSingletonList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChannelsSingletonList.prototype.compare = function (a, b) {
        return a instanceof Channel_1.Channel && b instanceof Channel_1.Channel && a.getName() === b.getName();
    };
    return ChannelsSingletonList;
}(SingletonList_1.default));
exports.ChannelsSingletonList = ChannelsSingletonList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbHNTaW5nbGV0b25MaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3JlbGF5L2Nvbm5lY3Rpb24vY2hhbm5lbC9DaGFubmVsc1NpbmdsZXRvbkxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWdFO0FBQ2hFLHFDQUFvQztBQUVwQztJQUEyQyx5Q0FBc0I7SUFBakU7O0lBUUEsQ0FBQztJQU5HLHVDQUFPLEdBQVAsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUVULE9BQU8sQ0FBQyxZQUFZLGlCQUFPLElBQUksQ0FBQyxZQUFZLGlCQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUV2RixDQUFDO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBMkMsdUJBQWEsR0FRdkQ7QUFSWSxzREFBcUIifQ==