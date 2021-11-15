"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listeners = void 0;
var Listener_1 = require("./Listener");
var Callback_1 = require("../Callback");
var Listeners = /** @class */ (function () {
    function Listeners() {
        this.listeners = [];
    }
    Listeners.prototype.getAll = function () {
        return this.listeners;
    };
    Listeners.prototype.add = function (name, callback) {
        if (callback === void 0) { callback = function () { }; }
        var listener = this.get(name);
        return listener.addCallback(new Callback_1.Callback(callback));
    };
    Listeners.prototype.addAll = function (names, callback) {
        var _this = this;
        return names.map(function (name) {
            var listener = _this.get(name);
            return listener.addCallback(new Callback_1.Callback(callback));
        });
    };
    Listeners.prototype.get = function (name) {
        var listener = this.getAll().find(function (listener) { return listener.getName() === name; });
        if (listener != undefined) {
            return listener;
        }
        listener = new Listener_1.Listener(name);
        this.listeners.push(listener);
        return listener;
    };
    return Listeners;
}());
exports.Listeners = Listeners;
//# sourceMappingURL=Listeners.js.map