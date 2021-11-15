"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = void 0;
var Header_1 = require("./Header");
var Headers = /** @class */ (function () {
    function Headers() {
        this.headers = [];
    }
    Headers.prototype.getAll = function () {
        return this.headers;
    };
    Headers.prototype.create = function (name, value) {
        if (value === void 0) { value = undefined; }
        var header = new Header_1.Header(name, value);
        this.headers.push(header);
        return header;
    };
    Headers.prototype.get = function (name) {
        if (this.exists(name)) {
            return this.getAll().find(function (header) { return header.getName() === name; });
        }
        return this.create(name);
    };
    Headers.prototype.exists = function (name) {
        return this.getAll().find(function (header) { return header.getName() === name; }) !== undefined;
    };
    Headers.prototype.serialize = function () {
        var output = {};
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var header = _a[_i];
            output[header.getName()] = header.getValue();
        }
        return output;
    };
    return Headers;
}());
exports.Headers = Headers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hcGkvY2xpZW50L3JlcXVlc3QvaGVhZGVyL0hlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtDO0FBRWxDO0lBQUE7UUFFWSxZQUFPLEdBQWEsRUFBRSxDQUFDO0lBa0RuQyxDQUFDO0lBaERHLHdCQUFNLEdBQU47UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFeEIsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBUSxJQUFZLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxpQkFBaUI7UUFFbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUUsSUFBSSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBRSxDQUFDO1FBRTVCLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUssSUFBWTtRQUViLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsRUFBRztZQUV0QixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUF6QixDQUF5QixDQUFDLENBQUM7U0FFbEU7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFFLENBQUM7SUFFL0IsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBUSxJQUFZO1FBRWhCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQXpCLENBQXlCLENBQUMsS0FBSyxTQUFTLENBQUM7SUFFakYsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFFSSxJQUFJLE1BQU0sR0FBNkIsRUFBRSxDQUFDO1FBRXRDLEtBQXFCLFVBQWEsRUFBYixLQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFHO1lBQWhDLElBQU0sTUFBTSxTQUFBO1lBRWIsTUFBTSxDQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUVsRDtRQUVMLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQXBEWSwwQkFBTyJ9