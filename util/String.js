"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var String = /** @class */ (function () {
    function String() {
    }
    String.matchAll = function (string, regexp) {
        var matches = [];
        string.replace(regexp, function () {
            var arr = ([]).slice.call(arguments, 0);
            var extras = arr.splice(-2);
            arr.index = extras[0];
            arr.input = extras[1];
            matches.push(arr);
        });
        return matches.length ? matches : null;
    };
    String.ucFirst = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    String.generateRandom = function (length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    String.ellipsis = function (value, limit, direction) {
        if (direction === void 0) { direction = 'right'; }
        if (!value || limit > value.length) {
            return value;
        }
        if (direction === 'right') {
            return value.substr(0, limit) + '...';
        }
        return '...' + value.substr(limit);
    };
    return String;
}());
exports.default = String;
//# sourceMappingURL=String.js.map