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
Object.defineProperty(exports, "__esModule", { value: true });
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception(message, code) {
        var _newTarget = this.constructor;
        if (code === void 0) { code = null; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, trueProto);
        _this.message = message;
        _this.code = code;
        return _this;
    }
    Exception.prototype.getMessage = function () {
        return this.message;
    };
    Exception.prototype.hasCode = function () {
        return this.code !== null;
    };
    Exception.prototype.getCode = function () {
        return this.code;
    };
    return Exception;
}(Error));
exports.default = Exception;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4Y2VwdGlvbnMvRXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBdUMsNkJBQUs7SUFLM0MsbUJBQWEsT0FBZSxFQUFFLElBQXdCOztRQUF4QixxQkFBQSxFQUFBLFdBQXdCO1FBQXRELGlCQVdDO1FBVEEsSUFBTSxTQUFTLEdBQUcsV0FBVyxTQUFTLENBQUM7UUFFdkMsUUFBQSxrQkFBTyxPQUFPLENBQUUsU0FBQztRQUVqQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV2QyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFFbEIsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFFQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFckIsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFFQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBRTNCLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBRUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRWxCLENBQUM7SUFFRixnQkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBdUMsS0FBSyxHQW9DM0MifQ==