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
exports.Client = void 0;
var Listeners_1 = require("../../listener/nonStatic/Listeners");
var Request_1 = require("./request/Request");
var ResultRegistry_1 = require("./result/ResultRegistry");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.getDefaultDomainFetcher = function () {
        return Request_1.Request.getDefaultDomainFetcher();
    };
    Client.setDefaultDomainFetcher = function (fetcher) {
        Request_1.Request.setDefaultDomainFetcher(fetcher);
    };
    Client.init = function (endpoint, options) {
        return new Request_1.Request(endpoint, options);
    };
    Client.onResponse = function (callback) {
        return Client.listeners.add('onResponse', callback);
    };
    Client.invokeOnResponse = function (request, method, response) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = {};
                        _b = {
                            id: request.getId()
                        };
                        return [4 /*yield*/, request.getDomain()];
                    case 1:
                        _b.domain = _c.sent();
                        return [4 /*yield*/, request.isSecure()];
                    case 2:
                        result = (_a.request = (_b.secure = _c.sent(),
                            _b.endpoint = request.getEndpoint(),
                            _b.includeSession = request.shouldIncludeSession(),
                            _b.method = method,
                            _b.responseType = request.getResponseType(),
                            _b),
                            _a.response = response,
                            _a);
                        ResultRegistry_1.ResultRegistry.add(result);
                        return [4 /*yield*/, Client.listeners.get('onResponse').invoke(result.request, result.response)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.listeners = new Listeners_1.Listeners();
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FwaS9jbGllbnQvQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUFxRTtBQUNyRSw2Q0FBc0U7QUFDdEUsMERBQXlEO0FBU3pEO0lBQUE7SUFxREEsQ0FBQztJQWpEVSw4QkFBdUIsR0FBOUI7UUFFSSxPQUFPLGlCQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUU3QyxDQUFDO0lBRU0sOEJBQXVCLEdBQTlCLFVBQWdDLE9BQXVCO1FBRW5ELGlCQUFPLENBQUMsdUJBQXVCLENBQUUsT0FBTyxDQUFFLENBQUM7SUFFL0MsQ0FBQztJQUVNLFdBQUksR0FBWCxVQUFhLFFBQWdCLEVBQUUsT0FBa0I7UUFFN0MsT0FBTyxJQUFJLGlCQUFPLENBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBRSxDQUFDO0lBRTVDLENBQUM7SUFFTSxpQkFBVSxHQUFqQixVQUFtQixRQUF3RDtRQUV2RSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV4RCxDQUFDO0lBRVksdUJBQWdCLEdBQTdCLFVBQStCLE9BQWdCLEVBQUUsTUFBdUIsRUFBRSxRQUFtQjs7Ozs7Ozs7OzRCQU1qRixFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRTs7d0JBQ1gscUJBQU0sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBakMsU0FBTSxHQUFFLFNBQXlCO3dCQUN6QixxQkFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQU5sQyxNQUFNLElBRVIsVUFBTyxJQUlILFNBQU0sR0FBRSxTQUF3Qjs0QkFDaEMsV0FBUSxHQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQy9CLGlCQUFjLEdBQUUsT0FBTyxDQUFDLG9CQUFvQixFQUFFOzRCQUM5QyxTQUFNLFNBQUE7NEJBQ04sZUFBWSxHQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUU7K0JBRTFDOzRCQUNELFdBQVEsV0FBQTsrQkFFWDt3QkFFRCwrQkFBYyxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQzt3QkFFN0IscUJBQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBRSxFQUFBOzt3QkFBbEYsU0FBa0YsQ0FBQzs7Ozs7S0FFdEY7SUFqRGMsZ0JBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQW1EL0MsYUFBQztDQUFBLEFBckRELElBcURDO0FBckRZLHdCQUFNIn0=