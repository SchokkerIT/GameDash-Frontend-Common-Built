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
var SingletonList_1 = __importDefault(require("controllers/singleton/SingletonList"));
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
//# sourceMappingURL=ChannelsSingletonList.js.map