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
exports.CountriesCachedList = void 0;
var CachedList_1 = __importDefault(require("../../cache/CachedList"));
var Country_1 = require("./Country");
var CountriesCachedList = /** @class */ (function (_super) {
    __extends(CountriesCachedList, _super);
    function CountriesCachedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CountriesCachedList.prototype.compare = function (a, b) {
        return a instanceof Country_1.Country && b instanceof Country_1.Country && a.getCode() === b.getCode();
    };
    return CountriesCachedList;
}(CachedList_1.default));
exports.CountriesCachedList = CountriesCachedList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyaWVzQ2FjaGVkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9sb2NhdGlvbi9jb3VudHJ5L0NvdW50cmllc0NhY2hlZExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXNEO0FBQ3RELHFDQUFvQztBQUVwQztJQUF5Qyx1Q0FBbUI7SUFBNUQ7O0lBUUEsQ0FBQztJQU5HLHFDQUFPLEdBQVAsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUVULE9BQU8sQ0FBQyxZQUFZLGlCQUFPLElBQUksQ0FBQyxZQUFZLGlCQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUV2RixDQUFDO0lBRUwsMEJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBeUMsb0JBQVUsR0FRbEQ7QUFSWSxrREFBbUIifQ==