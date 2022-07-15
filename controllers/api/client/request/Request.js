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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(Methods_1.Methods.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Request.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(Methods_1.Methods.Post)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Request.prototype.put = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(Methods_1.Methods.Put)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Request.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(Methods_1.Methods.Delete)];
                    case 1: return [2 /*return*/, _a.sent()];
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
    Request.prototype.request = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var axiosResponse, url, e_1;
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
                                onUploadProgress: this.isListeningForUploadProgress() ? this.handleUploadProgress : undefined,
                                onDownloadProgress: this.isListeningForDownloadProgress() ? this.handleDownloadProgress : undefined
                            })];
                    case 2:
                        axiosResponse = _a.sent();
                        this.setEndTime(Time_1.Time.now());
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (!e_1.response) {
                            throw e_1;
                        }
                        axiosResponse = e_1.response;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, this.handleResponse(method, axiosResponse)];
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
                        response.setNativeResponse(axiosResponse);
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
    Request.prototype.isListeningForUploadProgress = function () {
        return this.listeners.get('onUploadProgress').getCallbacks().length > 0;
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
    Request.prototype.isListeningForDownloadProgress = function () {
        return this.listeners.get('onDownloadProgress').getCallbacks().length > 0;
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
                        return [2 /*return*/, Url_1.Url.fromString("http" + (isSecure ? 's' : '') + "://" + domain + "/" + this.getVersion() + "/" + this.getEndpoint())];
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
    Request.prototype.getVersion = function () {
        return this.version;
    };
    Request.prototype.setVersion = function (version) {
        this.version = version;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hcGkvY2xpZW50L3JlcXVlc3QvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBb0U7QUFDcEUsNERBQXFDO0FBQ3JDLDZCQUFvQztBQUVwQyxvQ0FBb0U7QUFDcEUsaURBQW1EO0FBQ25ELDJDQUE2QztBQUM3QyxtRUFBMkY7QUFDM0YseUNBQTJDO0FBQzNDLDRDQUEyQztBQUMzQyxxREFBb0Q7QUFDcEQsZ0RBQStDO0FBQy9DLHNFQUFvRztBQUNwRyxvQ0FBbUM7QUFFbkMsMERBQWdFO0FBT2hFO0lBd0JJLGlCQUFhLFFBQWdCLEVBQUUsT0FBa0I7UUFBakQsaUJBT0M7UUExQmdCLE9BQUUsR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFDO1FBQ2QsVUFBSyxHQUFHLGVBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLHFCQUFrQixFQUFFLENBQUM7UUFFckMsZ0NBQTJCLEdBQUcsSUFBSSx5Q0FBMkIsRUFBRSxDQUFDO1FBR3pFLGlCQUFZLEdBQWlCLE1BQU0sQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFtUWIseUJBQW9CLEdBQUcsVUFBUSxRQUF5Qjs7d0JBQXFCLHFCQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBRSxRQUFRLENBQUUsRUFBQTt3QkFBN0Msc0JBQUEsU0FBNkMsRUFBQTs7aUJBQUEsQ0FBQztRQW9C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