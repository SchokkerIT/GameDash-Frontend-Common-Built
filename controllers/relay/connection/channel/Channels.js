"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channels = void 0;
var Channel_1 = require("./Channel");
var ChannelsSingletonMap_1 = require("./ChannelsSingletonMap");
var Channels = /** @class */ (function () {
    function Channels(connection) {
        this.channelsSingletonMap = new ChannelsSingletonMap_1.ChannelsSingletonMap();
        this.connection = connection;
    }
    Channels.prototype.getAll = function () {
        return Object.entries(this.channelsSingletonMap.getAll()).map(function (_a) {
            var channel = _a[1];
            return channel;
        });
    };
    Channels.prototype.get = function (name) {
        var _this = this;
        return this.channelsSingletonMap.handle(name, function () { return new Channel_1.Channel(_this.connection, name); });
    };
    return Channels;
}());
exports.Channels = Channels;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9jaGFubmVsL0NoYW5uZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUFvQztBQUNwQywrREFBaUc7QUFFakc7SUFLQyxrQkFBYSxVQUFzQjtRQUYzQix5QkFBb0IsR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7UUFJekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFFOUIsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFFQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBYTtnQkFBVCxPQUFPLFFBQUE7WUFBTyxPQUFBLE9BQU87UUFBUCxDQUFPLENBQUMsQ0FBQztJQUU3RixDQUFDO0lBRUQsc0JBQUcsR0FBSCxVQUFLLElBQVk7UUFBakIsaUJBU0M7UUFQQSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBRXRDLElBQUksRUFDSixjQUFNLE9BQUEsSUFBSSxpQkFBTyxDQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFFLEVBQXBDLENBQW9DLENBRTFDLENBQUM7SUFFSCxDQUFDO0lBRUYsZUFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksNEJBQVEifQ==