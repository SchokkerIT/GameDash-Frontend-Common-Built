"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerManager = void 0;
var ErrorHandler_1 = require("./ErrorHandler");
var ErrorHandlerManager = /** @class */ (function () {
    function ErrorHandlerManager() {
        this.handlers = [];
        this.registerDefaultHandler();
    }
    ErrorHandlerManager.prototype.registerHandler = function (handler) {
        this.handlers.unshift(handler instanceof ErrorHandler_1.ErrorHandler ?
            handler
            :
                new ErrorHandler_1.ErrorHandler(handler));
    };
    ErrorHandlerManager.prototype.handleIncoming = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, handler, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.handlers;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        handler = _a[_i];
                        return [4 /*yield*/, handler.execute(response)];
                    case 2:
                        result = _b.sent();
                        if (result === false) {
                            return [2 /*return*/];
                        }
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ErrorHandlerManager.prototype.registerDefaultHandler = function () {
        var defaultHandler = ErrorHandlerManager.getDefaultHandler();
        if (defaultHandler) {
            this.registerHandler(defaultHandler);
        }
    };
    ErrorHandlerManager.getDefaultHandler = function () {
        return ErrorHandlerManager.defaultHandler;
    };
    ErrorHandlerManager.setDefaultHandler = function (handler) {
        ErrorHandlerManager.defaultHandler = handler;
    };
    return ErrorHandlerManager;
}());
exports.ErrorHandlerManager = ErrorHandlerManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JIYW5kbGVyTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hcGkvY2xpZW50L3JlcXVlc3QvcmVzcG9uc2UvRXJyb3JIYW5kbGVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFHOUM7SUFNSTtRQUZpQixhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUkzQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUVsQyxDQUFDO0lBRUQsNkNBQWUsR0FBZixVQUFpQixPQUF3RDtRQUVyRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FFakIsT0FBTyxZQUFZLDJCQUFZLENBQUMsQ0FBQztZQUU3QixPQUFPO1lBRUgsQ0FBQztnQkFFTCxJQUFJLDJCQUFZLENBQUUsT0FBTyxDQUFFLENBRWxDLENBQUM7SUFFTixDQUFDO0lBRUssNENBQWMsR0FBcEIsVUFBc0IsUUFBa0I7Ozs7Ozs4QkFFSCxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVE7Ozs2QkFBYixDQUFBLGNBQWEsQ0FBQTt3QkFBeEIsT0FBTzt3QkFFRyxxQkFBTSxPQUFPLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBRSxFQUFBOzt3QkFBMUMsTUFBTSxHQUFHLFNBQWlDO3dCQUVoRCxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUc7NEJBRW5CLHNCQUFPO3lCQUVWOzs7d0JBUmUsSUFBYSxDQUFBOzs7Ozs7S0FZcEM7SUFFRCxvREFBc0IsR0FBdEI7UUFFSSxJQUFNLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRS9ELElBQUksY0FBYyxFQUFHO1lBRWpCLElBQUksQ0FBQyxlQUFlLENBQUUsY0FBYyxDQUFFLENBQUM7U0FFMUM7SUFFTCxDQUFDO0lBRU0scUNBQWlCLEdBQXhCO1FBRUksT0FBTyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7SUFFOUMsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUEwQixPQUFxQjtRQUUzQyxtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBRWpELENBQUM7SUFFTCwwQkFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFwRVksa0RBQW1CIn0=