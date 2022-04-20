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
exports.Request = void 0;
var axios_1 = __importDefault(require("axios"));
var axios_retry_1 = __importDefault(require("axios-retry"));
var uuid_1 = require("uuid");
var Client_1 = require("../Client");
var Config_1 = require("../../../config/Config");
var Time_1 = require("../../../time/Time");
var Listeners_1 = require("../../../listener/nonStatic/Listeners");
var Url_1 = require("../../../http/Url");
var Headers_1 = require("./header/Headers");
var Parameters_1 = require("./parameter/Parameters");
var Response_1 = require("./response/Response");
var ErrorHandlerManager_1 = require("./response/ErrorHandlerManager");
var Client_2 = require("../Client");
var Methods_1 = require("../../../../enums/http/Methods");
var Request = /** @class */ (function () {
    function Request(endpoint, options) {
        var _this = this;
        this.id = (0, uuid_1.v4)();
        this.axios = axios_1.default.create();
        this.headers = new Headers_1.Headers();
        this.parameters = new Parameters_1.Parameters();
        this.listeners = new Listeners_1.Listeners();
        this.responseErrorHandlerManager = new ErrorHandlerManager_1.ErrorHandlerManager();
        this.responseType = 'json';
        this.secure = true;
        this.includeSession = true;
        this.validateResponse = true;
        this.retry = true;
        this.handleUploadProgress = function (progress) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.invokeOnUploadProgress(progress)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.handleDownloadProgress = function (progress) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeOnDownloadProgress(progress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.endpoint = endpoint;
        this.options = options;
        (0, axios_retry_1.default)(this.axios);
    }
    Request.prototype.getId = function () {
        return this.id;
    };
    Request.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.handleResponse;
                        _b = [Methods_1.Methods.Get];
                        return [4 /*yield*/, this.makeRequest(Methods_1.Methods.Get)];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    Request.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.handleResponse;
                        _b = [Methods_1.Methods.Post];
                        return [4 /*yield*/, this.makeRequest(Methods_1.Methods.Post)];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    Request.prototype.put = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.handleResponse;
                        _b = [Methods_1.Methods.Put];
                        return [4 /*yield*/, this.makeRequest(Methods_1.Methods.Put)];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    Request.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.handleResponse;
                        _b = [Methods_1.Methods.Delete];
                        return [4 /*yield*/, this.makeRequest(Methods_1.Methods.Delete)];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    Request.prototype.getParameters = function () {
        return this.parameters;
    };
    Request.prototype.getHeaders = function () {
        return this.headers;
    };
    Request.prototype.shouldRetry = function () {
        return this.retry;
    };
    Request.prototype.setShouldRetry = function (shouldRetry) {
        this.retry = shouldRetry;
    };
    Request.prototype.getResponseType = function () {
        return this.responseType;
    };
    Request.prototype.setResponseType = function (responseType) {
        this.responseType = responseType;
    };
    Request.prototype.shouldIncludeSession = function () {
        return this.includeSession;
    };
    Request.prototype.setShouldIncludeSession = function (shouldIncludeSession) {
        this.includeSession = shouldIncludeSession;
    };
    Request.prototype.shouldValidateResponse = function () {
        return this.validateResponse;
    };
    Request.prototype.setShouldValidateResponse = function (shouldValidateResponse) {
        this.validateResponse = shouldValidateResponse;
    };
    Request.prototype.getStartTime = function () {
        return this.startTime;
    };
    Request.prototype.setStartTime = function (time) {
        this.startTime = time;
    };
    Request.prototype.getEndTime = function () {
        return this.endTime;
    };
    Request.prototype.setEndTime = function (time) {
        this.endTime = time;
    };
    Request.prototype.getMillisecondsElapsed = function () {
        var endTime = this.getEndTime() || Time_1.Time.now();
        return endTime.getUnixMillisTimestamp() - this.getStartTime().getUnixMillisTimestamp();
    };
    Request.prototype.makeRequest = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var response, url, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.setStartTime(Time_1.Time.now());
                        return [4 /*yield*/, this.getUrl()];
                    case 1:
                        url = _a.sent();
                        return [4 /*yield*/, this.axios.request({
                                url: url.toString(),
                                method: method,
                                headers: this.getHeaders().serialize(),
                                params: Methods_1.Methods.Get === method ? this.getParameters().serialize() : {},
                                data: Methods_1.Methods.Get !== method ? this.getData() : {},
                                responseType: this.getResponseType(),
                                onUploadProgress: this.handleUploadProgress,
                                onDownloadProgress: this.handleDownloadProgress
                            })];
                    case 2:
                        response = _a.sent();
                        this.setEndTime(Time_1.Time.now());
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (!e_1.response) {
                            throw e_1;
                        }
                        response = e_1.response;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, response];
                }
            });
        });
    };
    Request.prototype.getResponseErrorHandlerManager = function () {
        return this.responseErrorHandlerManager;
    };
    Request.prototype.handleResponse = function (method, axiosResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var response, statusCode, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response_1.Response(axiosResponse.data, axiosResponse.status);
                        statusCode = response.getStatusCode();
                        success = statusCode >= 200 && statusCode < 300;
                        return [4 /*yield*/, this.invokeOnResponse(method, {
                                body: axiosResponse.data,
                                success: success,
                                statusCode: statusCode
                            })];
                    case 1:
                        _a.sent();
                        if (!this.shouldValidateResponse()) return [3 /*break*/, 3];
                        if (!!success) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.responseErrorHandlerManager.handleIncoming(response)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    Request.prototype.onResponse = function (callback) {
        return this.listeners.add('onResponse', callback);
    };
    Request.prototype.invokeOnResponse = function (method, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listeners.get('onResponse').invoke(method, response)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Client_1.Client.invokeOnResponse(this, method, response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Request.prototype.onUploadProgress = function (callback) {
        return this.listeners.add('onUploadProgress', callback);
    };
    Request.prototype.invokeOnUploadProgress = function (progress) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listeners.get('onUploadProgress').invoke(progress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Request.prototype.onDownloadProgress = function (callback) {
        return this.listeners.add('onDownloadProgress', callback);
    };
    Request.prototype.invokeOnDownloadProgress = function (progress) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listeners.get('onDownloadProgress').invoke(progress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Request.prototype.isSecure = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.secure !== undefined) {
                            return [2 /*return*/, this.secure];
                        }
                        return [4 /*yield*/, Config_1.Config.get('api.isSecure')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Request.prototype.setIsSecure = function (secure) {
        this.secure = secure;
    };
    Request.prototype.getUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var domain, isSecure;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDomain()];
                    case 1:
                        domain = _a.sent();
                        return [4 /*yield*/, this.isSecure()];
                    case 2:
                        isSecure = _a.sent();
                        return [2 /*return*/, Url_1.Url.fromString("http" + (isSecure ? 's' : '') + "://" + domain + "/v1/" + this.getEndpoint())];
                }
            });
        });
    };
    Request.prototype.getEndpoint = function () {
        return this.endpoint;
    };
    Request.prototype.getDomain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var domainFetcher, domain;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domainFetcher = this.getDomainFetcher() || Client_2.Client.getDefaultDomainFetcher();
                        if (!domainFetcher) return [3 /*break*/, 2];
                        return [4 /*yield*/, Client_2.Client.getDefaultDomainFetcher()()];
                    case 1:
                        domain = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        domain = this.domain;
                        _a.label = 3;
                    case 3: return [2 /*return*/, domain];
                }
            });
        });
    };
    Request.prototype.setDomain = function (domain) {
        this.domain = domain;
    };
    Request.prototype.getDomainFetcher = function () {
        return this.domainFetcher;
    };
    Request.prototype.setDomainFetcher = function (fetch) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.domainFetcher = fetch;
                return [2 /*return*/];
            });
        });
    };
    Request.prototype.getData = function () {
        if (this.getHeaders().get('Content-Type').getValue() === 'multipart/inputs-data') {
            var formData = new FormData();
            for (var _i = 0, _a = this.getParameters().getAll(); _i < _a.length; _i++) {
                var parameter = _a[_i];
                formData.append(parameter.getName(), parameter.getValue());
            }
            return formData;
        }
        else {
            return this.getParameters().serialize();
        }
    };
    Request.getDefaultDomainFetcher = function () {
        return Request.defaultDomainFetcher;
    };
    Request.setDefaultDomainFetcher = function (fetcher) {
        Request.defaultDomainFetcher = fetcher;
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hcGkvY2xpZW50L3JlcXVlc3QvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBcUQ7QUFDckQsNERBQXFDO0FBQ3JDLDZCQUFvQztBQUVwQyxvQ0FBb0U7QUFDcEUsaURBQW1EO0FBQ25ELDJDQUE2QztBQUM3QyxtRUFBMkY7QUFDM0YseUNBQTJDO0FBQzNDLDRDQUEyQztBQUMzQyxxREFBb0Q7QUFDcEQsZ0RBQStDO0FBQy9DLHNFQUFvRztBQUNwRyxvQ0FBbUM7QUFFbkMsMERBQWdFO0FBT2hFO0lBdUJJLGlCQUFhLFFBQWdCLEVBQUUsT0FBa0I7UUFBakQsaUJBT0M7UUF6QmdCLE9BQUUsR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFDO1FBQ2QsVUFBSyxHQUFHLGVBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLHFCQUFrQixFQUFFLENBQUM7UUFFckMsZ0NBQTJCLEdBQUcsSUFBSSx5Q0FBMkIsRUFBRSxDQUFDO1FBR3pFLGlCQUFZLEdBQWlCLE1BQU0sQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBRyxJQUFJLENBQUM7UUF3UWIseUJBQW9CLEdBQUcsVUFBUSxRQUF5Qjs7d0JBQXFCLHFCQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBRSxRQUFRLENBQUUsRUFBQTt3QkFBN0Msc0JBQUEsU0FBNkMsRUFBQTs7aUJBQUEsQ0FBQztRQWMzSCwyQkFBc0IsR0FBRyxVQUFRLFFBQTJCOzs7NEJBRWhFLHFCQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBRSxRQUFRLENBQUUsRUFBQTs7d0JBQS9DLFNBQStDLENBQUM7Ozs7YUFFbkQsQ0FBQztRQXBSRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFBLHFCQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBRTdCLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBRUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFSyxxQkFBRyxHQUFUOzs7Ozs7d0JBRWlCLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQTs4QkFFNUIsaUJBQWUsQ0FBQyxHQUFHO3dCQUNuQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFlLENBQUMsR0FBRyxDQUFDLEVBQUE7NEJBSHhDLHFCQUFNLFNBQUEsSUFBSSxhQUdiLFNBQTJDLEdBRTlDLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFDOzs7O0tBRUw7SUFFSyxzQkFBSSxHQUFWOzs7Ozs7d0JBRWlCLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQTs4QkFFNUIsaUJBQWUsQ0FBQyxJQUFJO3dCQUNwQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFlLENBQUMsSUFBSSxDQUFDLEVBQUE7NEJBSHpDLHFCQUFNLFNBQUEsSUFBSSxhQUdiLFNBQTRDLEdBRS9DLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFDOzs7O0tBRUw7SUFFSyxxQkFBRyxHQUFUOzs7Ozs7d0JBRWlCLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQTs4QkFFNUIsaUJBQWUsQ0FBQyxHQUFHO3dCQUNuQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFlLENBQUMsR0FBRyxDQUFDLEVBQUE7NEJBSHhDLHFCQUFNLFNBQUEsSUFBSSxhQUdiLFNBQTJDLEdBRTlDLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFDOzs7O0tBRUw7SUFFSyx3QkFBTSxHQUFaOzs7Ozs7d0JBRWlCLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQTs4QkFFNUIsaUJBQWUsQ0FBQyxNQUFNO3dCQUN0QixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFFLGlCQUFlLENBQUMsTUFBTSxDQUFFLEVBQUE7NEJBSDdDLHFCQUFNLFNBQUEsSUFBSSxhQUdiLFNBQWdELEdBRW5ELEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFDOzs7O0tBRUw7SUFFRCwrQkFBYSxHQUFiO1FBRUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRTNCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBRXhCLENBQUM7SUFFRCw2QkFBVyxHQUFYO1FBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXRCLENBQUM7SUFFRCxnQ0FBYyxHQUFkLFVBQWdCLFdBQW9CO1FBRWhDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0lBRTdCLENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBRUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBRTdCLENBQUM7SUFFRCxpQ0FBZSxHQUFmLFVBQWlCLFlBQTBCO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBRXJDLENBQUM7SUFFRCxzQ0FBb0IsR0FBcEI7UUFFSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFFL0IsQ0FBQztJQUVELHlDQUF1QixHQUF2QixVQUF5QixvQkFBNkI7UUFFbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztJQUUvQyxDQUFDO0lBRUQsd0NBQXNCLEdBQXRCO1FBRUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFFakMsQ0FBQztJQUVELDJDQUF5QixHQUF6QixVQUEyQixzQkFBK0I7UUFFdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDO0lBRW5ELENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBRTFCLENBQUM7SUFFTyw4QkFBWSxHQUFwQixVQUFzQixJQUFVO1FBRTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBRTFCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBRXhCLENBQUM7SUFFTyw0QkFBVSxHQUFsQixVQUFvQixJQUFVO1FBRTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXhCLENBQUM7SUFFRCx3Q0FBc0IsR0FBdEI7UUFFSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWhELE9BQU8sT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFFM0YsQ0FBQztJQUVLLDZCQUFXLEdBQWpCLFVBQW1CLE1BQXVCOzs7Ozs7O3dCQU1sQyxJQUFJLENBQUMsWUFBWSxDQUFFLFdBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBRSxDQUFDO3dCQUVwQixxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUF6QixHQUFHLEdBQUcsU0FBbUI7d0JBRXBCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dDQUVoQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsTUFBTSxFQUFFLE1BQXFCO2dDQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRTtnQ0FDdEMsTUFBTSxFQUFFLGlCQUFlLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUM5RSxJQUFJLEVBQUUsaUJBQWUsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQzFELFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFO2dDQUNwQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO2dDQUMzQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCOzZCQUVsRCxDQUFDLEVBQUE7O3dCQVhGLFFBQVEsR0FBRyxTQVdULENBQUM7d0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBRSxXQUFJLENBQUMsR0FBRyxFQUFFLENBQUUsQ0FBQzs7Ozt3QkFLOUIsSUFBSSxDQUFDLEdBQUMsQ0FBQyxRQUFRLEVBQUc7NEJBRWQsTUFBTSxHQUFDLENBQUM7eUJBRVg7d0JBRUQsUUFBUSxHQUFHLEdBQUMsQ0FBQyxRQUFRLENBQUM7OzRCQUkxQixzQkFBTyxRQUFRLEVBQUM7Ozs7S0FFbkI7SUFFRCxnREFBOEIsR0FBOUI7UUFFSSxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUU1QyxDQUFDO0lBRWUsZ0NBQWMsR0FBOUIsVUFBZ0MsTUFBdUIsRUFBRSxhQUFrQjs7Ozs7O3dCQUVqRSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDO3dCQUVwRSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUN0QyxPQUFPLEdBQUcsVUFBVSxJQUFJLEdBQUcsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDO3dCQUV0RCxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBRXZCLE1BQU0sRUFDTjtnQ0FFSSxJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUk7Z0NBQ3hCLE9BQU8sU0FBQTtnQ0FDUCxVQUFVLFlBQUE7NkJBRWIsQ0FFSixFQUFBOzt3QkFYRCxTQVdDLENBQUM7NkJBRUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQTdCLHdCQUE2Qjs2QkFFekIsQ0FBQyxPQUFPLEVBQVIsd0JBQVE7d0JBRVIscUJBQU0sSUFBSSxDQUFDLDJCQUEyQixDQUFDLGNBQWMsQ0FBRSxRQUFRLENBQUUsRUFBQTs7d0JBQWpFLFNBQWlFLENBQUM7OzRCQU0xRSxzQkFBTyxRQUFRLEVBQUM7Ozs7S0FHbkI7SUFFRCw0QkFBVSxHQUFWLFVBQVksUUFBOEQ7UUFFdEUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVhLGtDQUFnQixHQUE5QixVQUFnQyxNQUF1QixFQUFFLFFBQW1COzs7OzRCQUV4RSxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBRSxFQUFBOzt3QkFBakUsU0FBaUUsQ0FBQzt3QkFFbEUscUJBQU0sZUFBUyxDQUFDLGdCQUFnQixDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFFLEVBQUE7O3dCQUExRCxTQUEwRCxDQUFDOzs7OztLQUU5RDtJQUVELGtDQUFnQixHQUFoQixVQUFrQixRQUF1RDtRQUVyRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTVELENBQUM7SUFFYSx3Q0FBc0IsR0FBcEMsVUFBc0MsUUFBeUI7Ozs7NEJBRTNELHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBRSxFQUFBOzt3QkFBL0QsU0FBK0QsQ0FBQzs7Ozs7S0FFbkU7SUFJRCxvQ0FBa0IsR0FBbEIsVUFBb0IsUUFBMkQ7UUFFM0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU5RCxDQUFDO0lBRWEsMENBQXdCLEdBQXRDLFVBQXdDLFFBQTJCOzs7OzRCQUUvRCxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUUsRUFBQTs7d0JBQWpFLFNBQWlFLENBQUM7Ozs7O0tBRXJFO0lBUUssMEJBQVEsR0FBZDs7Ozs7d0JBRUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRzs0QkFFNUIsc0JBQU8sSUFBSSxDQUFDLE1BQU0sRUFBQzt5QkFFdEI7d0JBRU0scUJBQU0sZUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBQTs0QkFBdkMsc0JBQU8sU0FBZ0MsRUFBQzs7OztLQUUzQztJQUVELDZCQUFXLEdBQVgsVUFBYSxNQUFlO1FBRXhCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRXpCLENBQUM7SUFFSyx3QkFBTSxHQUFaOzs7Ozs0QkFFbUIscUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBL0IsTUFBTSxHQUFHLFNBQXNCO3dCQUNwQixxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFoQyxRQUFRLEdBQUcsU0FBcUI7d0JBRXRDLHNCQUFPLFNBQUcsQ0FBQyxVQUFVLENBQUUsVUFBUSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFRLE1BQU0sWUFBUyxJQUFJLENBQUMsV0FBVyxFQUFLLENBQUUsRUFBQzs7OztLQUVwRztJQUVELDZCQUFXLEdBQVg7UUFFSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFekIsQ0FBQztJQUVLLDJCQUFTLEdBQWY7Ozs7Ozt3QkFFVSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksZUFBTSxDQUFDLHVCQUF1QixFQUFFLENBQUM7NkJBSTlFLGFBQWEsRUFBYix3QkFBYTt3QkFFSixxQkFBTSxlQUFNLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxFQUFBOzt3QkFBakQsTUFBTSxHQUFHLFNBQXdDLENBQUM7Ozt3QkFLbEQsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7OzRCQUl6QixzQkFBTyxNQUFNLEVBQUM7Ozs7S0FFakI7SUFFRCwyQkFBUyxHQUFULFVBQVcsTUFBYztRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUV6QixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBRUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBRTlCLENBQUM7SUFFSyxrQ0FBZ0IsR0FBdEIsVUFBd0IsS0FBcUI7OztnQkFFekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Ozs7S0FFOUI7SUFFTyx5QkFBTyxHQUFmO1FBRUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLHVCQUF1QixFQUFHO1lBRS9FLElBQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFFaEMsS0FBc0IsVUFBNkIsRUFBN0IsS0FBQSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQTdCLGNBQTZCLEVBQTdCLElBQTZCLEVBQUc7Z0JBQWpELElBQUksU0FBUyxTQUFBO2dCQUVkLFFBQVEsQ0FBQyxNQUFNLENBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBRSxDQUFDO2FBRWhFO1lBRUQsT0FBTyxRQUFRLENBQUM7U0FFbkI7YUFDSTtZQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBRTNDO0lBRUwsQ0FBQztJQUVNLCtCQUF1QixHQUE5QjtRQUVJLE9BQU8sT0FBTyxDQUFDLG9CQUFvQixDQUFDO0lBRXhDLENBQUM7SUFFTSwrQkFBdUIsR0FBOUIsVUFBZ0MsT0FBdUI7UUFFbkQsT0FBTyxDQUFDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQztJQUUzQyxDQUFDO0lBRUwsY0FBQztBQUFELENBQUMsQUExWkQsSUEwWkM7QUExWlksMEJBQU8ifQ==