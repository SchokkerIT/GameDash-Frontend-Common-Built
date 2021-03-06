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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectWrapper = void 0;
var Logger_1 = require("../../../logger/Logger");
var System_1 = require("../../../../util/System");
var ConnectionException_1 = __importDefault(require("../ConnectionException"));
var ConnectionTimedOutException_1 = __importDefault(require("../ConnectionTimedOutException"));
var ConnectWrapper = /** @class */ (function () {
    function ConnectWrapper(connectFunction) {
        this.connectFunction = connectFunction;
    }
    ConnectWrapper.prototype.attempt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var maxAttempts, attempts, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        maxAttempts = this.getMaxAttempts();
                        attempts = 0;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 8];
                        if (this.getMaxAttempts()) {
                            Logger_1.Logger.getInstance().debug("Relay connection attempt " + (attempts + 1) + " of " + this.getMaxAttempts());
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 7]);
                        return [4 /*yield*/, this.connectFunction()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        e_1 = _a.sent();
                        if (e_1 instanceof ConnectionException_1.default) {
                            attempts++;
                            Logger_1.Logger.getInstance().debug("Relay connection attempt " + attempts + " failed: " + e_1.message);
                            if (maxAttempts !== null && attempts >= maxAttempts) {
                                throw new ConnectionTimedOutException_1.default("Could not establish connection to relay server after " + attempts + " attempts");
                            }
                        }
                        else {
                            Logger_1.Logger.getInstance().debug("Could not connect to relay server " + e_1.message);
                            throw e_1;
                        }
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, System_1.System.sleep(2000)];
                    case 6:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 7: return [3 /*break*/, 1];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ConnectWrapper.prototype.getMaxAttempts = function () {
        return this.maxAttempts;
    };
    ConnectWrapper.prototype.setMaxAttempts = function (attempts) {
        this.maxAttempts = attempts;
    };
    return ConnectWrapper;
}());
exports.ConnectWrapper = ConnectWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdFdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9tYW5hZ2VyL0Nvbm5lY3RXcmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtRDtBQUVuRCxrREFBbUQ7QUFFbkQsK0VBQXlEO0FBQ3pELCtGQUF5RTtBQUl6RTtJQUtJLHdCQUFhLGVBQWlDO1FBRTFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBRTNDLENBQUM7SUFFSyxnQ0FBTyxHQUFiOzs7Ozs7d0JBRVUsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFFdEMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7OzZCQUVYLElBQUk7d0JBRU4sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUc7NEJBRXhCLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQTZCLFFBQVEsR0FBRyxDQUFDLGFBQVMsSUFBSSxDQUFDLGNBQWMsRUFBSyxDQUFDLENBQUM7eUJBRTFHOzs7O3dCQUlHLHFCQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQTVCLFNBQTRCLENBQUM7d0JBRTdCLHdCQUFNOzs7d0JBS04sSUFBSSxHQUFDLFlBQVksNkJBQW1CLEVBQUc7NEJBRW5DLFFBQVEsRUFBRSxDQUFDOzRCQUVYLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQTZCLFFBQVEsaUJBQWMsR0FBQyxDQUFDLE9BQVUsQ0FBQyxDQUFDOzRCQUU1RixJQUFJLFdBQVcsS0FBSyxJQUFJLElBQUksUUFBUSxJQUFJLFdBQVcsRUFBRztnQ0FFbEQsTUFBTSxJQUFJLHFDQUEyQixDQUFDLDBEQUF5RCxRQUFRLGNBQVksQ0FBQyxDQUFDOzZCQUV4SDt5QkFFSjs2QkFDSTs0QkFFRCxlQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLHVDQUFzQyxHQUFDLENBQUMsT0FBVSxDQUFDLENBQUM7NEJBRS9FLE1BQU0sR0FBQyxDQUFDO3lCQUVYOzs0QkFLRCxxQkFBTSxlQUFVLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzs7Ozs7OztLQU0xQztJQUVELHVDQUFjLEdBQWQ7UUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFNUIsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZ0IsUUFBZ0I7UUFFNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFFaEMsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQTlFRCxJQThFQztBQTlFWSx3Q0FBYyJ9