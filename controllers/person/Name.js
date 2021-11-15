"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
var Name = /** @class */ (function () {
    function Name(first, last) {
        if (first === void 0) { first = null; }
        if (last === void 0) { last = null; }
        this.first = first;
        this.last = last;
    }
    Name.prototype.getFirst = function () {
        return this.first;
    };
    Name.prototype.hasFirst = function () {
        return this.first != null;
    };
    Name.prototype.setFirst = function (first) {
        this.first = first;
    };
    Name.prototype.getLast = function () {
        return this.last;
    };
    Name.prototype.hasLast = function () {
        return this.last != null;
    };
    Name.prototype.setLast = function (last) {
        this.last = last;
    };
    Name.prototype.getFull = function () {
        return "" + (this.hasLast() ? this.getFirst() : null) + (this.hasLast() ? " " + this.getLast() : null);
    };
    Name.prototype.getInitials = function () {
        var first = this.getFirst();
        var last = this.getLast();
        return [
            first ? first[0] : '',
            last ? last[0] : ''
        ];
    };
    Name.create = function (first, last) {
        return new Name(first, last);
    };
    return Name;
}());
exports.Name = Name;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9wZXJzb24vTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtJQUtJLGNBQWEsS0FBb0IsRUFBRSxJQUFtQjtRQUF6QyxzQkFBQSxFQUFBLFlBQW9CO1FBQUUscUJBQUEsRUFBQSxXQUFtQjtRQUVsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUV0QixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFFOUIsQ0FBQztJQUVELHVCQUFRLEdBQVIsVUFBVSxLQUFhO1FBRW5CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBRXZCLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRXJCLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUU3QixDQUFDO0lBRUQsc0JBQU8sR0FBUCxVQUFTLElBQVk7UUFFakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFckIsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFFSSxPQUFPLE1BQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksSUFBSSxDQUFDLE9BQU8sRUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUcsQ0FBQztJQUUzRyxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUVJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTztZQUVILEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBRXRCLENBQUM7SUFFTixDQUFDO0lBRU0sV0FBTSxHQUFiLFVBQWUsS0FBYSxFQUFFLElBQVk7UUFFdEMsT0FBTyxJQUFJLElBQUksQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFFLENBQUM7SUFFbkMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDO0FBMUVZLG9CQUFJIn0=