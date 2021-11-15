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
var Client_1 = require("controllers/api/client/Client");
var Config_1 = require("controllers/config/Config");
var Listeners_1 = require("controllers/listener/nonStatic/Listeners");
var Url_1 = require("controllers/http/Url");
var Headers_1 = require("./header/Headers");
var Parameters_1 = require("./parameter/Parameters");
var Response_1 = require("./response/Response");
var ErrorHandlerManager_1 = require("./response/ErrorHandlerManager");
var Client_2 = require("../Client");
var Methods_1 = require("enums/http/Methods");
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
        this.handleDownloadProgress = function (progress) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.invokeOnDownloadProgress(progress)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
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
    Request.prototype.makeRequest = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, e_1;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        _b = (_a = this.axios).request;
                        _c = {};
                        return [4 /*yield*/, this.getUrl()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.url = (_d.sent()).toString(),
                                _c.method = method,
                                _c.headers = this.getHeaders().serialize(),
                                _c.params = Methods_1.Methods.Get === method ? this.getParameters().serialize() : {},
                                _c.data = Methods_1.Methods.Get !== method ? this.getData() : {},
                                _c.responseType = this.getResponseType(),
                                _c.onUploadProgress = this.handleUploadProgress,
                                _c.onDownloadProgress = this.handleDownloadProgress,
                                _c)])];
                    case 2:
                        response = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _d.sent();
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
//# sourceMappingURL=Request.js.map