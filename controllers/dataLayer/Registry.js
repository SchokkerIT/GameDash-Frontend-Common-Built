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
//# sourceMappingURL=Registry.js.map