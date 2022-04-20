"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iteration = void 0;
var Iteration = /** @class */ (function () {
    function Iteration() {
    }
    Iteration.iterate = function (times, callback) {
        var results = [];
        if (times > 0) {
            results = __spreadArray([
                callback(times)
            ], Iteration.iterate(times - 1, callback), true);
        }
        return results;
    };
    return Iteration;
}());
exports.Iteration = Iteration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvSXRlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUEwQkEsQ0FBQztJQXhCVSxpQkFBTyxHQUFkLFVBRUksS0FBYSxFQUNiLFFBQTZCO1FBSTdCLElBQUksT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUV0QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUc7WUFFWixPQUFPO2dCQUVILFFBQVEsQ0FBRSxLQUFLLENBQUU7ZUFDZCxTQUFTLENBQUMsT0FBTyxDQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFFLE9BRTlDLENBQUM7U0FFTDtRQUVELE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksOEJBQVMifQ==