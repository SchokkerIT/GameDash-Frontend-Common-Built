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
//# sourceMappingURL=Channels.js.map