"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var KeyValue_1 = require("controllers/store/memory/keyValue/KeyValue");
var Store = /** @class */ (function () {
    function Store() {
        this.memoryKeyValueStore = new KeyValue_1.KeyValue();
    }
    Store.prototype.getValues = function () {
        return this.memoryKeyValueStore.getValues();
    };
    Store.prototype.getValue = function (name) {
        return this.memoryKeyValueStore.getValue(name);
    };
    Store.prototype.valueExists = function (name) {
        return this.memoryKeyValueStore.valueExists(name);
    };
    Store.prototype.setValues = function (values) {
        this.memoryKeyValueStore.setValues(values);
    };
    Store.prototype.setValue = function (name, value) {
        this.memoryKeyValueStore.setValue(name, value);
    };
    Store.prototype.deleteValue = function (name) {
        this.memoryKeyValueStore.deleteValue(name);
    };
    Store.prototype.clear = function () {
        this.memoryKeyValueStore.clear();
    };
    Store.prototype.clearValueSource = function (valueSource) {
        var _this = this;
        valueSource.getFetchableValues().forEach(function (name) { return _this.deleteValue(name); });
        ;
    };
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=Store.js.map