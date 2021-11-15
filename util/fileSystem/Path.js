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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL2ZpbGVTeXN0ZW0vUGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE0RUEsQ0FBQztJQTFFVSxjQUFTLEdBQWhCLFVBRUksSUFBWSxFQUNaLE9BS007UUFMTix3QkFBQSxFQUFBLFlBS007UUFJRSxJQUFBLEtBQStCLE9BQU8sVUFBdkIsRUFBZixTQUFTLG1CQUFHLEdBQUcsS0FBQSxFQUFFLEtBQWMsT0FBTyxNQUFaLEVBQVQsS0FBSyxtQkFBRyxDQUFDLEtBQUEsQ0FBYTtRQUUvQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUUsQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFHO1lBRWxCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVYLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBRSxDQUFDO1NBRWpDO2FBQ0k7WUFFRCxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBRXBCO1FBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFHO1lBRVosT0FBTyxJQUFJLENBQUMsU0FBUyxDQUVqQixJQUFJLHdCQUdHLE9BQU8sR0FDUDtnQkFFQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUM7YUFFbkIsRUFJUixDQUFDO1NBRUw7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBRU0sWUFBTyxHQUFkLFVBRUksSUFBWSxFQUNaLE9BUUM7UUFSRCx3QkFBQSxFQUFBO1lBTUksU0FBUyxFQUFFLEdBQUc7U0FFakI7UUFJTyxJQUFBLFNBQVMsR0FBSyxPQUFPLFVBQVosQ0FBYTtRQUU5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsU0FBUyxDQUFFLENBQUM7SUFFbkMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBNUVELElBNEVDO0FBNUVZLG9CQUFJIn0=