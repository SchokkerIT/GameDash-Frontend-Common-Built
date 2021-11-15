"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValue = void 0;
var KeyValue = /** @class */ (function () {
    function KeyValue() {
        this.values = {};
    }
    KeyValue.prototype.getValues = function () {
        return this.values;
    };
    KeyValue.prototype.getValue = function (name) {
        return this.values[name];
    };
    KeyValue.prototype.valueExists = function (name) {
        return this.values.hasOwnProperty(name);
    };
    KeyValue.prototype.setValues = function (values) {
        this.values = values;
    };
    KeyValue.prototype.setValue = function (name, value) {
        this.values[name] = value;
    };
    KeyValue.prototype.deleteValue = function (name) {
        delete this.values[name];
    };
    KeyValue.prototype.clear = function () {
        this.values = {};
    };
    return KeyValue;
}());
exports.KeyValue = KeyValue;
//# sourceMappingURL=KeyValue.js.map