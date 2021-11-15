"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connections = void 0;
var Connection_1 = require("./Connection");
var Connections = /** @class */ (function () {
    function Connections() {
    }
    Connections.getAllRegistered = function () {
        return this.connections;
    };
    Connections.getRegistered = function (id) {
        return Connections.getAllRegistered().find(function (connection) { return connection.getId() === id; });
    };
    Connections.getRegisteredByName = function (name) {
        return Connections.getAllRegistered().find(function (connection) { return connection.getName() === name; });
    };
    Connections.createRegistered = function (host) {
        var connection = Connection_1.Connection.create(host);
        this.connections.push(connection);
        return connection;
    };
    Connections.connections = [];
    return Connections;
}());
exports.Connections = Connections;
//# sourceMappingURL=Connections.js.map