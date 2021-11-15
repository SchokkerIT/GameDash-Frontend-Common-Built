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
exports.Manager = void 0;
var System_1 = require("./System");
var Manager = /** @class */ (function () {
    function Manager(func, interval) {
        this._isActive = null;
        this.func = func;
        this.interval = interval;
    }
    Manager.prototype.start = function () {
        if (this.isActive()) {
            throw new Error('Already active');
        }
        this.setIsActive(true);
        this.tick();
    };
    Manager.prototype.stop = function () {
        if (!this.isActive()) {
            throw new Error('Not active');
        }
        this.setIsActive(false);
    };
    Manager.prototype.isActive = function () {
        return this._isActive;
    };
    Manager.prototype.setIsActive = function (isActive) {
        this._isActive = isActive;
    };
    Manager.prototype.tick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.func(this)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, System_1.System.sleep(this.interval)];
                    case 2:
                        _a.sent();
                        if (this.isActive()) {
                            this.tick();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Manager;
}());
exports.Manager = Manager;
var initiator = function (func, interval) {
    var manager = new Manager(func, interval);
    manager.start();
    return manager;
};
exports.default = initiator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNJbnRlcnZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL0FzeW5jSW50ZXJ2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWdEO0FBSWhEO0lBT0ksaUJBQWEsSUFBZSxFQUFFLFFBQWdCO1FBRnRDLGNBQVMsR0FBYSxJQUFJLENBQUM7UUFJL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFN0IsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFFSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRztZQUVsQixNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FFckM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRUQsc0JBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUc7WUFFbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUVqQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFOUIsQ0FBQztJQUVELDBCQUFRLEdBQVI7UUFFSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFFMUIsQ0FBQztJQUVPLDZCQUFXLEdBQW5CLFVBQXFCLFFBQWlCO1FBRWxDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBRTlCLENBQUM7SUFFYSxzQkFBSSxHQUFsQjs7Ozs0QkFFSSxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzt3QkFFeEIscUJBQU0sZUFBVSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFFLEVBQUE7O3dCQUF2QyxTQUF1QyxDQUFDO3dCQUV4QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRzs0QkFFbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUVmOzs7OztLQUVKO0lBRUwsY0FBQztBQUFELENBQUMsQUFsRUQsSUFrRUM7QUFsRVksMEJBQU87QUFvRXBCLElBQU0sU0FBUyxHQUFHLFVBQUUsSUFBZSxFQUFFLFFBQWdCO0lBRWpELElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFFLElBQUksRUFBRSxRQUFRLENBQUUsQ0FBQztJQUU5QyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFaEIsT0FBTyxPQUFPLENBQUM7QUFFbkIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIn0=