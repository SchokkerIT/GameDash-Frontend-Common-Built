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
exports.InstancedConfig = void 0;
var MemoryProvider_1 = require("./providers/MemoryProvider");
var InstancedConfig = /** @class */ (function () {
    function InstancedConfig() {
    }
    InstancedConfig.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().init()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InstancedConfig.prototype.get = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().get(path)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InstancedConfig.prototype.exists = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvider().exists(path)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InstancedConfig.prototype.getProvider = function () {
        if (!this.provider) {
            this.provider = new MemoryProvider_1.MemoryProvider();
        }
        return this.provider;
    };
    InstancedConfig.prototype.setProvider = function (provider) {
        this.provider = provider;
    };
    return InstancedConfig;
}());
exports.InstancedConfig = InstancedConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdGFuY2VkQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NvbmZpZy9JbnN0YW5jZWRDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQTREO0FBRTVEO0lBQUE7SUF3Q0EsQ0FBQztJQXBDUyw4QkFBSSxHQUFWOzs7OzRCQUVXLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs0QkFBdEMsc0JBQU8sU0FBK0IsRUFBQzs7OztLQUUxQztJQUVLLDZCQUFHLEdBQVQsVUFBVyxJQUFZOzs7OzRCQUVaLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLEVBQUE7NEJBQTNDLHNCQUFPLFNBQW9DLEVBQUM7Ozs7S0FFL0M7SUFFSyxnQ0FBTSxHQUFaLFVBQWMsSUFBWTs7Ozs0QkFFZixxQkFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBRSxFQUFBOzRCQUE5QyxzQkFBTyxTQUF1QyxFQUFDOzs7O0tBRWxEO0lBRUQscUNBQVcsR0FBWDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFHO1lBRWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7U0FFeEM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFekIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBYSxRQUFtQjtRQUU1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUU3QixDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLDBDQUFlIn0=