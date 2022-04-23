"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(elements) {
        if (elements === void 0) { elements = []; }
        this.elements = {};
        this.head = 0;
        this.tail = 0;
        if (elements.length > 0) {
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element = elements_1[_i];
                this.enqueue(element);
            }
        }
    }
    Queue.prototype.enqueue = function (element) {
        this.elements[this.tail] = element;
        this.tail++;
    };
    Queue.prototype.enqueueAll = function (elements) {
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var element = elements_2[_i];
            this.enqueue(element);
        }
    };
    Queue.prototype.dequeue = function () {
        if (this.elements[this.head] === undefined) {
            return null;
        }
        var element = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return element;
    };
    Queue.prototype.peek = function () {
        return this.elements[this.head];
    };
    Queue.prototype.contains = function (element) {
        return Boolean(Object
            .entries(this.elements)
            .find(function (_a) {
            var _element = _a[1];
            return element === _element;
        }));
    };
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.tail - this.head;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "isEmpty", {
        get: function () {
            return this.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Queue.create = function (elements) {
        if (elements === void 0) { elements = []; }
        return new Queue(elements);
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcG9seWZpbGxzL3F1ZXVlL1F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBTUksZUFBYSxRQUFrQjtRQUFsQix5QkFBQSxFQUFBLGFBQWtCO1FBSmQsYUFBUSxHQUE2QixFQUFFLENBQUM7UUFDakQsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxDQUFDLENBQUM7UUFJYixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFHO1lBRXRCLEtBQW9CLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFHO2dCQUExQixJQUFJLE9BQU8saUJBQUE7Z0JBRVosSUFBSSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUUsQ0FBQzthQUUzQjtTQUVKO0lBRUwsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUyxPQUFVO1FBRWYsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLEdBQUcsT0FBTyxDQUFDO1FBRXJDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFZLFFBQWE7UUFFckIsS0FBb0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUc7WUFBMUIsSUFBSSxPQUFPLGlCQUFBO1lBRVosSUFBSSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUUsQ0FBQztTQUUzQjtJQUVMLENBQUM7SUFFRCx1QkFBTyxHQUFQO1FBRUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUc7WUFFekMsT0FBTyxJQUFJLENBQUM7U0FFZjtRQUVELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVosT0FBTyxPQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFFSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFRCx3QkFBUSxHQUFSLFVBQVUsT0FBVTtRQUVoQixPQUFPLE9BQU8sQ0FFVixNQUFNO2FBQ0QsT0FBTyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUU7YUFDeEIsSUFBSSxDQUFDLFVBQUMsRUFBYztnQkFBVixRQUFRLFFBQUE7WUFBTyxPQUFBLE9BQU8sS0FBSyxRQUFRO1FBQXBCLENBQW9CLENBQUMsQ0FFdEQsQ0FBQztJQUVOLENBQUM7SUFFRCxzQkFBSSx5QkFBTTthQUFWO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBTzthQUFYO1lBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUU3QixDQUFDOzs7T0FBQTtJQUVNLFlBQU0sR0FBYixVQUFrQixRQUFrQjtRQUFsQix5QkFBQSxFQUFBLGFBQWtCO1FBRWhDLE9BQU8sSUFBSSxLQUFLLENBQUUsUUFBUSxDQUFFLENBQUM7SUFFakMsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDLEFBNUZELElBNEZDO0FBNUZZLHNCQUFLIn0=