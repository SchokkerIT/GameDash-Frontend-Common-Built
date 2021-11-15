"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listeners = void 0;
var Listeners_1 = require("./nonStatic/Listeners");
var Listener_1 = require("./Listener");
var Callback_1 = require("./Callback");
var Listeners = /** @class */ (function () {
    function Listeners() {
    }
    Listeners.getAll = function () {
        return Listeners.listeners;
    };
    Listeners.add = function (name, callback) {
        var Listener = Listeners.get(name);
        return Listener.addCallback(new Callback_1.Callback(callback));
    };
    Listeners.get = function (name) {
        var listener = this.getAll().find(function (listener) {
            return listener.getName() === name;
        });
        if (listener != undefined) {
            return listener;
        }
        listener = new Listener_1.Listener(name);
        Listeners.listeners.push(listener);
        return listener;
    };
    Listeners.NonStatic = Listeners_1.Listeners;
    Listeners.listeners = [];
    return Listeners;
}());
exports.Listeners = Listeners;
//# sourceMappingURL=Listeners.js.map