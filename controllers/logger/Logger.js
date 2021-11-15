"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var LoggerException_1 = __importDefault(require("./LoggerException"));
var Logger = /** @class */ (function () {
    function Logger(adapter) {
        this.adapter = adapter;
    }
    Logger.prototype.message = function (message, category) {
        this.adapter.message(message, category);
    };
    Logger.prototype.error = function (message) {
        this.adapter.error(message);
    };
    Logger.prototype.warn = function (message) {
        this.adapter.warn(message);
    };
    Logger.prototype.trace = function (message) {
        this.adapter.trace(message);
    };
    Logger.prototype.info = function (message) {
        this.adapter.info(message);
    };
    Logger.prototype.success = function (message) {
        this.adapter.success(message);
    };
    Logger.prototype.debug = function (message) {
        this.adapter.debug(message);
    };
    Logger.getDefaultAdapter = function () {
        return Logger.defaultAdapter;
    };
    Logger.setDefaultAdapter = function (adapter) {
        Logger.defaultAdapter = adapter;
    };
    Logger.getInstance = function (adapter) {
        if (adapter === void 0) { adapter = null; }
        if (!adapter) {
            if (!Logger.getDefaultAdapter()) {
                throw new LoggerException_1.default('No default adapter is set');
            }
            adapter = Logger.getDefaultAdapter();
        }
        return new Logger(adapter);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map