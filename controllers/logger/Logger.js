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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2xvZ2dlci9Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0VBQWdEO0FBSWhEO0lBTUksZ0JBQWEsT0FBaUI7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFM0IsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUyxPQUFZLEVBQUUsUUFBYTtRQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFFOUMsQ0FBQztJQUVELHNCQUFLLEdBQUwsVUFBTyxPQUFZO1FBRWYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUUsT0FBTyxDQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBTSxPQUFZO1FBRWQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUM7SUFFakMsQ0FBQztJQUVELHNCQUFLLEdBQUwsVUFBTyxPQUFZO1FBRWYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUUsT0FBTyxDQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBTSxPQUFZO1FBRWQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUM7SUFFakMsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUyxPQUFZO1FBRWpCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0lBRXBDLENBQUM7SUFFRCxzQkFBSyxHQUFMLFVBQU8sT0FBWTtRQUVmLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0lBRWxDLENBQUM7SUFFTSx3QkFBaUIsR0FBeEI7UUFFSSxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFFakMsQ0FBQztJQUVNLHdCQUFpQixHQUF4QixVQUEwQixPQUFpQjtRQUV2QyxNQUFNLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUVwQyxDQUFDO0lBRU0sa0JBQVcsR0FBbEIsVUFBb0IsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxjQUF3QjtRQUV4QyxJQUFJLENBQUMsT0FBTyxFQUFHO1lBRVgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFHO2dCQUU5QixNQUFNLElBQUkseUJBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBRTFEO1lBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBRXhDO1FBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FBQztJQUVqQyxDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUFwRkQsSUFvRkM7QUFwRlksd0JBQU0ifQ==