"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementations = void 0;
var Implementations = /** @class */ (function () {
    function Implementations() {
    }
    Implementations.getAll = function () {
        return Implementations.implementations;
    };
    Implementations.add = function (implementation) {
        var index = Implementations.implementations.push(implementation);
        return {
            remove: function () { return delete Implementations.implementations[index]; }
        };
    };
    Implementations.remove = function (index) {
        delete Implementations.implementations[index];
    };
    Implementations.clear = function () {
        Implementations.getAll().forEach(function (implementation) { return implementation.clear(); });
    };
    Implementations.implementations = [];
    return Implementations;
}());
exports.Implementations = Implementations;
//# sourceMappingURL=Implementations.js.map