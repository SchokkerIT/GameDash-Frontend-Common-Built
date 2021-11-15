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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5VmFsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvc3RvcmUvbWVtb3J5L2tleVZhbHVlL0tleVZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBQUE7UUFFWSxXQUFNLEdBQVcsRUFBRSxDQUFDO0lBZ0RoQyxDQUFDO0lBOUNHLDRCQUFTLEdBQVQ7UUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFdkIsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBVSxJQUFZO1FBRWxCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUUvQixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFhLElBQVk7UUFFckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUU5QyxDQUFDO0lBRUQsNEJBQVMsR0FBVCxVQUVJLE1BQWlDO1FBSWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRXpCLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVUsSUFBWSxFQUFFLEtBQVU7UUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsR0FBRyxLQUFLLENBQUM7SUFFaEMsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBYSxJQUFZO1FBRXJCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUUvQixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSw0QkFBUSJ9