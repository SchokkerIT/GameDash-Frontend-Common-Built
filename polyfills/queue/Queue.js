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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcG9seWZpbGxzL3F1ZXVlL1F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBTUksZUFBYSxRQUFrQjtRQUFsQix5QkFBQSxFQUFBLGFBQWtCO1FBSmQsYUFBUSxHQUE2QixFQUFFLENBQUM7UUFDakQsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxDQUFDLENBQUM7UUFJYixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFHO1lBRXRCLEtBQW9CLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFHO2dCQUExQixJQUFJLE9BQU8saUJBQUE7Z0JBRVosSUFBSSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUUsQ0FBQzthQUUzQjtTQUVKO0lBRUwsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUyxPQUFVO1FBRWYsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLEdBQUcsT0FBTyxDQUFDO1FBRXJDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFZLFFBQWE7UUFFckIsS0FBb0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUc7WUFBMUIsSUFBSSxPQUFPLGlCQUFBO1lBRVosSUFBSSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUUsQ0FBQztTQUUzQjtJQUVMLENBQUM7SUFFRCx1QkFBTyxHQUFQO1FBRUksSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWixPQUFPLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsQ0FBQztJQUVELHdCQUFRLEdBQVIsVUFBVSxPQUFVO1FBRWhCLE9BQU8sT0FBTyxDQUVWLE1BQU07YUFDRCxPQUFPLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRTthQUN4QixJQUFJLENBQUMsVUFBQyxFQUFjO2dCQUFWLFFBQVEsUUFBQTtZQUFPLE9BQUEsT0FBTyxLQUFLLFFBQVE7UUFBcEIsQ0FBb0IsQ0FBQyxDQUV0RCxDQUFDO0lBRU4sQ0FBQztJQUVELHNCQUFJLHlCQUFNO2FBQVY7WUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFPO2FBQVg7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBRTdCLENBQUM7OztPQUFBO0lBRU0sWUFBTSxHQUFiLFVBQWtCLFFBQWtCO1FBQWxCLHlCQUFBLEVBQUEsYUFBa0I7UUFFaEMsT0FBTyxJQUFJLEtBQUssQ0FBRSxRQUFRLENBQUUsQ0FBQztJQUVqQyxDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUF0RkQsSUFzRkM7QUF0Rlksc0JBQUsifQ==