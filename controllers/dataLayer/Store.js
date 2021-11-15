"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var KeyValue_1 = require("../store/memory/keyValue/KeyValue");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvZGF0YUxheWVyL1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhEQUFxRztBQUdyRztJQUFBO1FBRXFCLHdCQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztJQXNEckUsQ0FBQztJQXBERyx5QkFBUyxHQUFUO1FBRUksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFaEQsQ0FBQztJQUVELHdCQUFRLEdBQVIsVUFBVSxJQUFZO1FBRWxCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUVyRCxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFhLElBQVk7UUFFckIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxDQUFDO0lBRXhELENBQUM7SUFFRCx5QkFBUyxHQUFULFVBRUksTUFBaUM7UUFJakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUVqRCxDQUFDO0lBRUQsd0JBQVEsR0FBUixVQUFVLElBQVksRUFBRSxLQUFVO1FBRTlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUUsSUFBSSxFQUFFLEtBQUssQ0FBRSxDQUFDO0lBRXJELENBQUM7SUFFRCwyQkFBVyxHQUFYLFVBQWEsSUFBWTtRQUVyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxDQUFDO0lBRWpELENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBRUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXJDLENBQUM7SUFFRCxnQ0FBZ0IsR0FBaEIsVUFBa0IsV0FBd0I7UUFBMUMsaUJBSUM7UUFGRyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFBQSxDQUFDO0lBRWhGLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxzQkFBSyJ9