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
//# sourceMappingURL=Name.js.map