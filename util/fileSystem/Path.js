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
        if (!path) {
            return null;
        }
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
        if (!path) {
            return null;
        }
        return path.split(separator);
    };
    return Path;
}());
exports.Path = Path;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL2ZpbGVTeXN0ZW0vUGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF3RkEsQ0FBQztJQXRGVSxjQUFTLEdBQWhCLFVBRUksSUFBWSxFQUNaLE9BS007UUFMTix3QkFBQSxFQUFBLFlBS007UUFJTixJQUFJLENBQUMsSUFBSSxFQUFHO1lBRVIsT0FBTyxJQUFJLENBQUM7U0FFZjtRQUVPLElBQUEsS0FBK0IsT0FBTyxVQUF2QixFQUFmLFNBQVMsbUJBQUcsR0FBRyxLQUFBLEVBQUUsS0FBYyxPQUFPLE1BQVosRUFBVCxLQUFLLG1CQUFHLENBQUMsS0FBQSxDQUFhO1FBRS9DLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBRSxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUc7WUFFbEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRVgsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFFLENBQUM7U0FFakM7YUFDSTtZQUVELElBQUksR0FBRyxTQUFTLENBQUM7U0FFcEI7UUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUc7WUFFWixPQUFPLElBQUksQ0FBQyxTQUFTLENBRWpCLElBQUksd0JBR0csT0FBTyxHQUNQO2dCQUVDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQzthQUVuQixFQUlSLENBQUM7U0FFTDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFFTSxZQUFPLEdBQWQsVUFFSSxJQUFZLEVBQ1osT0FRQztRQVJELHdCQUFBLEVBQUE7WUFNSSxTQUFTLEVBQUUsR0FBRztTQUVqQjtRQUlPLElBQUEsU0FBUyxHQUFLLE9BQU8sVUFBWixDQUFhO1FBRTlCLElBQUksQ0FBQyxJQUFJLEVBQUc7WUFFUixPQUFPLElBQUksQ0FBQztTQUVmO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLFNBQVMsQ0FBRSxDQUFDO0lBRW5DLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0FBQyxBQXhGRCxJQXdGQztBQXhGWSxvQkFBSSJ9