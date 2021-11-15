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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonList = /** @class */ (function () {
    function SingletonList() {
    }
    SingletonList.prototype.getAll = function () {
        return this.list != undefined ? this.list : [];
    };
    SingletonList.prototype.find = function (callback) {
        return this.getAll().find(callback);
    };
    SingletonList.prototype.add = function (item) {
        if (this.list != undefined) {
            this.remove(item);
        }
        else {
            this.list = [];
        }
        this.list.push(item);
    };
    SingletonList.prototype.addAll = function (items) {
        this.list = __spreadArray(__spreadArray([], (this.list || []), true), items, true);
    };
    SingletonList.prototype.remove = function (item) {
        var _this = this;
        if (this.list != undefined) {
            this.list = this.list.filter(function (_item) { return !_this.compare(_item, item); });
        }
    };
    SingletonList.prototype.notEmpty = function () {
        return this.list !== undefined;
    };
    SingletonList.prototype.clear = function () {
        this.list = undefined;
    };
    SingletonList.prototype.handle = function (match, createInstance) {
        var result = this.find(match);
        if (!result) {
            result = createInstance();
            this.add(result);
        }
        return result;
    };
    SingletonList.prototype.handleAsync = function (match, createInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = this.find(match);
                        if (!!result) return [3 /*break*/, 2];
                        return [4 /*yield*/, createInstance()];
                    case 1:
                        result = _a.sent();
                        this.add(result);
                        _a.label = 2;
                    case 2: return [2 /*return*/, result];
                }
            });
        });
    };
    return SingletonList;
}());
exports.default = SingletonList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZ2xldG9uTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9zaW5nbGV0b24vU2luZ2xldG9uTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE2R0EsQ0FBQztJQXpHRyw4QkFBTSxHQUFOO1FBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRW5ELENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBRUksUUFBa0M7UUFJbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBRSxDQUFDO0lBRTFDLENBQUM7SUFFRCwyQkFBRyxHQUFILFVBQUssSUFBTztRQUVSLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUc7WUFFekIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQztTQUV2QjthQUNJO1lBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FFbEI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLEtBQVU7UUFFZCxJQUFJLENBQUMsSUFBSSxtQ0FBUSxDQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFFLFNBQUssS0FBSyxPQUFFLENBQUM7SUFFckQsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBUSxJQUFPO1FBQWYsaUJBUUM7UUFORyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFHO1lBRXpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7U0FFckU7SUFFTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7SUFFbkMsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUUxQixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUVJLEtBQStCLEVBQy9CLGNBQXlCO1FBSXpCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sRUFBRztZQUVWLE1BQU0sR0FBRyxjQUFjLEVBQUUsQ0FBQztZQUUxQixJQUFJLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBRSxDQUFDO1NBRXRCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUVLLG1DQUFXLEdBQWpCLFVBRUksS0FBK0IsRUFDL0IsY0FBa0M7Ozs7Ozt3QkFJOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7NkJBRTVCLENBQUMsTUFBTSxFQUFQLHdCQUFPO3dCQUVFLHFCQUFNLGNBQWMsRUFBRSxFQUFBOzt3QkFBL0IsTUFBTSxHQUFHLFNBQXNCLENBQUM7d0JBRWhDLElBQUksQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFFLENBQUM7OzRCQUl2QixzQkFBTyxNQUFNLEVBQUM7Ozs7S0FFakI7SUFJTCxvQkFBQztBQUFELENBQUMsQUE3R0QsSUE2R0MifQ==