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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9Db25uZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMEM7QUFHMUM7SUFBQTtJQWdDQSxDQUFDO0lBNUJVLDRCQUFnQixHQUF2QjtRQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUU1QixDQUFDO0lBRU0seUJBQWEsR0FBcEIsVUFBc0IsRUFBVTtRQUU1QixPQUFPLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUV4RixDQUFDO0lBRU0sK0JBQW1CLEdBQTFCLFVBQTRCLElBQVk7UUFFcEMsT0FBTyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFFNUYsQ0FBQztJQUVNLDRCQUFnQixHQUF2QixVQUF5QixJQUFXO1FBRWhDLElBQU0sVUFBVSxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRTdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBRXBDLE9BQU8sVUFBVSxDQUFDO0lBRXRCLENBQUM7SUE1QmMsdUJBQVcsR0FBaUIsRUFBRSxDQUFDO0lBOEJsRCxrQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLGtDQUFXIn0=