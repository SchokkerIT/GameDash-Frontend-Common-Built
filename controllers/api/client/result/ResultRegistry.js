"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultRegistry = void 0;
var ResultRegistry = /** @class */ (function () {
    function ResultRegistry() {
    }
    ResultRegistry.getAll = function () {
        return ResultRegistry.results;
    };
    ResultRegistry.add = function (result) {
        ResultRegistry.results.push(result);
    };
    ResultRegistry.results = [];
    return ResultRegistry;
}());
exports.ResultRegistry = ResultRegistry;
//# sourceMappingURL=ResultRegistry.js.map