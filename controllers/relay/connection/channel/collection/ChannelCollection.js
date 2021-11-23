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
exports.ChannelCollection = void 0;
var CachedValue_1 = require("../../../../cache/CachedValue");
var ChannelsSubscriptionManager_1 = require("./ChannelsSubscriptionManager");
var ChannelCollection = /** @class */ (function () {
    function ChannelCollection(channels) {
        if (channels === void 0) { channels = []; }
        this.subscriptionManager = new CachedValue_1.CachedValue();
        this.channels = [];
        this.channels = channels;
    }
    ChannelCollection.prototype.getNames = function () {
        return this.getChannels().map(function (channel) { return channel.getName(); });
    };
    ChannelCollection.prototype.getChannels = function () {
        return this.channels;
    };
    ChannelCollection.prototype.countChannels = function () {
        return this.getChannels().length;
    };
    ChannelCollection.prototype.setChannels = function (channels) {
        this.channels = channels;
    };
    ChannelCollection.prototype.addChannels = function (channels) {
        this.channels = __spreadArray(__spreadArray([], this.channels, true), channels, true);
    };
    ChannelCollection.prototype.addChannel = function (channel) {
        this.channels.push(channel);
    };
    ChannelCollection.prototype.subscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var manager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.getSubscriptionManager();
                        return [4 /*yield*/, manager.subscribe()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChannelCollection.prototype.clearCache = function () {
        for (var _i = 0, _a = this.getChannels(); _i < _a.length; _i++) {
            var channel = _a[_i];
            channel.clearCache();
        }
    };
    ChannelCollection.prototype.getSubscriptionManager = function () {
        var _this = this;
        return this.subscriptionManager.handleSync(function () { return ChannelsSubscriptionManager_1.ChannelsSubscriptionManager.create(_this); });
    };
    ChannelCollection.create = function (channels) {
        if (channels === void 0) { channels = []; }
        return new ChannelCollection(channels);
    };
    return ChannelCollection;
}());
exports.ChannelCollection = ChannelCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbENvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvY29ubmVjdGlvbi9jaGFubmVsL2NvbGxlY3Rpb24vQ2hhbm5lbENvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQTREO0FBRTVELDZFQUE0RTtBQUU1RTtJQUtJLDJCQUFhLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsYUFBd0I7UUFIN0Isd0JBQW1CLEdBQUcsSUFBSSx5QkFBVyxFQUErQixDQUFDO1FBQ3JFLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFJN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFN0IsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUVoRSxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUV6QixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUVyQyxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFhLFFBQW1CO1FBRTVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBRTdCLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQWEsUUFBbUI7UUFFNUIsSUFBSSxDQUFDLFFBQVEsbUNBRU4sSUFBSSxDQUFDLFFBQVEsU0FDYixRQUFRLE9BRWQsQ0FBQztJQUVOLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVksT0FBZ0I7UUFFeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVLLHFDQUFTLEdBQWY7Ozs7Ozt3QkFFVSxPQUFPLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBRTlDLHFCQUFNLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7Ozs7O0tBRTdCO0lBRUQsc0NBQVUsR0FBVjtRQUVJLEtBQW9CLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFHO1lBQXBDLElBQUksT0FBTyxTQUFBO1lBRVosT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBRXhCO0lBRUwsQ0FBQztJQUVPLGtEQUFzQixHQUE5QjtRQUFBLGlCQUlDO1FBRkcsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSx5REFBMkIsQ0FBQyxNQUFNLENBQUUsS0FBSSxDQUFFLEVBQTFDLENBQTBDLENBQUMsQ0FBQztJQUVqRyxDQUFDO0lBRU0sd0JBQU0sR0FBYixVQUFlLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsYUFBd0I7UUFFbkMsT0FBTyxJQUFJLGlCQUFpQixDQUFFLFFBQVEsQ0FBRSxDQUFDO0lBRTdDLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkM7QUFsRlksOENBQWlCIn0=