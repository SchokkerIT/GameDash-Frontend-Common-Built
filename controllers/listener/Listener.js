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
exports.Listener = void 0;
var uuid_1 = require("uuid");
var Listener = /** @class */ (function () {
    function Listener(name) {
        this.callbacks = {};
        this.name = name;
    }
    Listener.prototype.getName = function () {
        return this.name;
    };
    Listener.prototype.invoke = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var callbacks, promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        callbacks = this.getCallbacks();
                        promises = callbacks.map(function (callback) { return (callback.execute(args)); });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Listener.prototype.getCallbacks = function () {
        return (Object.entries(this.callbacks)
            .map(function (_a) {
            var callback = _a[1];
            return callback;
        }));
    };
    Listener.prototype.addCallback = function (callback, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var _a = options.id, id = _a === void 0 ? (0, uuid_1.v4)() : _a;
        this.callbacks[id] = callback;
        return {
            getId: function () { return id; },
            exists: function () {
                return _this.callbacks[id] == null;
            },
            remove: function () {
                delete _this.callbacks[id];
            }
        };
    };
    Listener.prototype.addUniqueCallback = function (id, callback) {
        return this.addCallback(callback, {
            id: id
        });
    };
    return Listener;
}());
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXIvTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQW9DO0FBTXBDO0lBU0Msa0JBQWEsSUFBWTtRQU5sQixjQUFTLEdBSVosRUFBRSxDQUFDO1FBSU4sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFFQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVLLHlCQUFNLEdBQVo7UUFBYyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOzs7Ozs7O3dCQUVyQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUVoQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBRTFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBRXhCLEVBSjBDLENBSTFDLENBQUMsQ0FBQzt3QkFFSSxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBRSxFQUFBOzRCQUFwQyxzQkFBTyxTQUE2QixFQUFDOzs7O0tBRXJDO0lBRUQsK0JBQVksR0FBWjtRQUVDLE9BQU8sQ0FFTixNQUFNLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUU7YUFDOUIsR0FBRyxDQUFDLFVBQUMsRUFBYztnQkFBVixRQUFRLFFBQUE7WUFBTyxPQUFBLFFBQVE7UUFBUixDQUFRLENBQUMsQ0FFbkMsQ0FBQztJQUVILENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBRUMsUUFBbUMsRUFDbkMsT0FJTTtRQVBQLGlCQXFDQztRQWxDQSx3QkFBQSxFQUFBLFlBSU07UUFNTCxJQUFBLEtBRUcsT0FBTyxHQUZHLEVBQWIsRUFBRSxtQkFBRyxJQUFBLFNBQU0sR0FBRSxLQUFBLENBRUY7UUFFWixJQUFJLENBQUMsU0FBUyxDQUFFLEVBQUUsQ0FBRSxHQUFHLFFBQVEsQ0FBQztRQUVoQyxPQUFPO1lBRU4sS0FBSyxFQUFFLGNBQU0sT0FBQSxFQUFFLEVBQUYsQ0FBRTtZQUVmLE1BQU0sRUFBRTtnQkFFUCxPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUUsRUFBRSxDQUFFLElBQUksSUFBSSxDQUFDO1lBRXJDLENBQUM7WUFFRCxNQUFNLEVBQUU7Z0JBRVAsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1lBRTdCLENBQUM7U0FFRCxDQUFDO0lBRUgsQ0FBQztJQUVELG9DQUFpQixHQUFqQixVQUVDLEVBQVUsRUFDVixRQUFtQztRQUluQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBRXRCLFFBQVEsRUFDUjtZQUVDLEVBQUUsSUFBQTtTQUVGLENBRUQsQ0FBQztJQUVILENBQUM7SUFFRixlQUFDO0FBQUQsQ0FBQyxBQXpHRCxJQXlHQztBQXpHWSw0QkFBUSJ9