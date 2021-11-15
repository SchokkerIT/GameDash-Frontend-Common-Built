"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;
var Coordinate = /** @class */ (function () {
    function Coordinate(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    Coordinate.prototype.getLatitude = function () {
        return this.latitude;
    };
    Coordinate.prototype.setLatitude = function (latitude) {
        this.latitude = latitude;
    };
    Coordinate.prototype.getLongitude = function () {
        return this.longitude;
    };
    Coordinate.prototype.setLongitude = function (longitude) {
        this.longitude = longitude;
    };
    return Coordinate;
}());
exports.Coordinate = Coordinate;
//# sourceMappingURL=Coordinate.js.map