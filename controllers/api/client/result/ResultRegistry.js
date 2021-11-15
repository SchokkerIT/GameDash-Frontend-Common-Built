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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdWx0UmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYXBpL2NsaWVudC9yZXN1bHQvUmVzdWx0UmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7SUFBQTtJQWdCQSxDQUFDO0lBWlUscUJBQU0sR0FBYjtRQUVJLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUVsQyxDQUFDO0lBRU0sa0JBQUcsR0FBVixVQUFZLE1BQWU7UUFFdkIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7SUFFMUMsQ0FBQztJQVpjLHNCQUFPLEdBQWMsRUFBRSxDQUFDO0lBYzNDLHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0NBQWMifQ==