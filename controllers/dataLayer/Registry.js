"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
var Registry = /** @class */ (function () {
    function Registry() {
    }
    Registry.getRegistered = function () {
        return Registry.registered;
    };
    Registry.register = function (dataLayer) {
        Registry.registered.push(dataLayer);
    };
    Registry.getWithTags = function (tags) {
        return this.getRegistered().filter(function (dataLayer) {
            for (var _i = 0, _a = dataLayer.getTags(); _i < _a.length; _i++) {
                var tag = _a[_i];
                if (tags.includes(tag)) {
                    return true;
                }
            }
            return false;
        });
    };
    Registry.getWithTag = function (tag) {
        return Registry.getWithTags([tag]);
    };
    Registry.clearAll = function () {
        for (var _i = 0, _a = Registry.getRegistered(); _i < _a.length; _i++) {
            var dataLayer = _a[_i];
            dataLayer.clear();
        }
    };
    Registry.clearWithTags = function (tags) {
        var _this = this;
        tags.forEach(function (tag) { return (_this.getWithTag(tag).forEach(function (dataLayer) { return dataLayer.clear(); })); });
    };
    Registry.clearWithTag = function (tag) {
        Registry.clearWithTags([tag]);
    };
    Registry.registered = [];
    return Registry;
}());
exports.Registry = Registry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvZGF0YUxheWVyL1JlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBQUE7SUFvRUEsQ0FBQztJQWhFVSxzQkFBYSxHQUFwQjtRQUVJLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUUvQixDQUFDO0lBRU0saUJBQVEsR0FBZixVQUFpQixTQUFxQjtRQUVsQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRU0sb0JBQVcsR0FBbEIsVUFBb0IsSUFBYztRQUU5QixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxTQUFTO1lBRXhDLEtBQWdCLFVBQW1CLEVBQW5CLEtBQUEsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFuQixjQUFtQixFQUFuQixJQUFtQixFQUFHO2dCQUFqQyxJQUFJLEdBQUcsU0FBQTtnQkFFUixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLEVBQUc7b0JBRXZCLE9BQU8sSUFBSSxDQUFDO2lCQUVmO2FBRUo7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUVqQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxtQkFBVSxHQUFqQixVQUFtQixHQUFXO1FBRTFCLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVNLGlCQUFRLEdBQWY7UUFFSSxLQUFzQixVQUF3QixFQUF4QixLQUFBLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBeEIsY0FBd0IsRUFBeEIsSUFBd0IsRUFBRztZQUE1QyxJQUFJLFNBQVMsU0FBQTtZQUVkLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUVyQjtJQUVMLENBQUM7SUFFTSxzQkFBYSxHQUFwQixVQUFzQixJQUFjO1FBQXBDLGlCQVFDO1FBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBRWhCLEtBQUksQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFqQixDQUFpQixDQUFDLENBRWpFLEVBSm1CLENBSW5CLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxxQkFBWSxHQUFuQixVQUFxQixHQUFXO1FBRTVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFoRWMsbUJBQVUsR0FBaUIsRUFBRSxDQUFDO0lBa0VqRCxlQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksNEJBQVEifQ==