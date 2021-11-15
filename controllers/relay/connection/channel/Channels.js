"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channels = void 0;
var Channel_1 = require("./Channel");
var ChannelsSingletonList_1 = require("./ChannelsSingletonList");
var Channels = /** @class */ (function () {
    function Channels(connection) {
        this.channelsSingletonList = new ChannelsSingletonList_1.ChannelsSingletonList();
        this.connection = connection;
    }
    Channels.prototype.getAll = function () {
        return this.channelsSingletonList.getAll();
    };
    Channels.prototype.get = function (name) {
        var _this = this;
        return this.channelsSingletonList.handle(function (channel) { return channel.getName() === name; }, function () { return new Channel_1.Channel(_this.connection, name); });
    };
    return Channels;
}());
exports.Channels = Channels;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9jaGFubmVsL0NoYW5uZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUFvQztBQUNwQyxpRUFBZ0U7QUFFaEU7SUFLQyxrQkFBYSxVQUFzQjtRQUYzQiwwQkFBcUIsR0FBRyxJQUFJLDZDQUFxQixFQUFFLENBQUM7UUFJM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFFOUIsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFFQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUU1QyxDQUFDO0lBRUQsc0JBQUcsR0FBSCxVQUFLLElBQVk7UUFBakIsaUJBU0M7UUFQQSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBRXZDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBMUIsQ0FBMEIsRUFDckMsY0FBTSxPQUFBLElBQUksaUJBQU8sQ0FBRSxLQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBRSxFQUFwQyxDQUFvQyxDQUUxQyxDQUFDO0lBRUgsQ0FBQztJQUVGLGVBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLDRCQUFRIn0=