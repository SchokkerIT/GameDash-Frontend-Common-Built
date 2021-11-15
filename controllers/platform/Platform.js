"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.isBrowser = function () {
        return typeof window !== 'undefined';
    };
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=Platform.js.map