"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var FlagManager_1 = require("./flag/FlagManager");
var Country = /** @class */ (function () {
    function Country(code, name) {
        this.flagManager = new FlagManager_1.FlagManager(this);
        this.code = code.toUpperCase();
        this.name = name;
    }
    Country.prototype.getCode = function () {
        return this.code;
    };
    Country.prototype.getName = function () {
        return this.name;
    };
    Country.prototype.getFlagManager = function () {
        return this.flagManager;
    };
    return Country;
}());
exports.Country = Country;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9sb2NhdGlvbi9jb3VudHJ5L0NvdW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQWlEO0FBRWpEO0lBTUMsaUJBQWEsSUFBWSxFQUFFLElBQVk7UUFGdEIsZ0JBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUUsSUFBSSxDQUFFLENBQUM7UUFJdEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFFQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFFQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFFQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFekIsQ0FBQztJQUVGLGNBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLDBCQUFPIn0=