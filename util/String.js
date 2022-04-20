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
        return '...' + value.substr(value.length - limit);
    };
    return String;
}());
exports.default = String;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvU3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQTJEQSxDQUFDO0lBekRPLGVBQVEsR0FBZixVQUFpQixNQUFNLEVBQUUsTUFBTTtRQUU5QixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFFbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFeEMsQ0FBQztJQUVNLGNBQU8sR0FBZCxVQUFnQixNQUFjO1FBRTdCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpELENBQUM7SUFFTSxxQkFBYyxHQUFyQixVQUF1QixNQUFjO1FBRXBDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksUUFBUSxHQUFHLGdFQUFnRSxDQUFDO1FBRWhGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFaEMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FFckU7UUFFRCxPQUFPLElBQUksQ0FBQztJQUViLENBQUM7SUFFTSxlQUFRLEdBQWYsVUFBaUIsS0FBYSxFQUFFLEtBQWEsRUFBRSxTQUFxQztRQUFyQywwQkFBQSxFQUFBLG1CQUFxQztRQUVuRixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFHO1lBRXBDLE9BQU8sS0FBSyxDQUFDO1NBRWI7UUFFRCxJQUFJLFNBQVMsS0FBSyxPQUFPLEVBQUc7WUFFM0IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7U0FFdEM7UUFFRCxPQUFPLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQUVGLGFBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDIn0=