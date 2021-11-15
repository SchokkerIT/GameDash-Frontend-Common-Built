"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
var Path = /** @class */ (function () {
    function Path() {
    }
    Path.getParent = function (path, options) {
        if (options === void 0) { options = {}; }
        var _a = options.separator, separator = _a === void 0 ? '/' : _a, _b = options.depth, depth = _b === void 0 ? 1 : _b;
        var bits = Path.explode(path, { separator: separator });
        if (bits.length > 1) {
            bits.pop();
            path = bits.join(separator);
        }
        else {
            path = separator;
        }
        if (depth > 1) {
            return Path.getParent(path, __assign(__assign({}, options), {
                depth: depth - 1
            }));
        }
        return path;
    };
    Path.explode = function (path, options) {
        if (options === void 0) { options = {
            separator: '/'
        }; }
        var separator = options.separator;
        return path.split(separator);
    };
    return Path;
}());
exports.Path = Path;
//# sourceMappingURL=Path.js.map