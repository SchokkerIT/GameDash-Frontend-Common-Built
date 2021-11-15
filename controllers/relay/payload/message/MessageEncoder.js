"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEncoder = void 0;
var Json_1 = require("controllers/json/Json");
var Base64_1 = require("controllers/base64/Base64");
var MessageEncoder = /** @class */ (function () {
    function MessageEncoder() {
    }
    MessageEncoder.encode = function (message) {
        var encodedMessage;
        if (typeof message === 'string') {
            encodedMessage = message;
        }
        else {
            encodedMessage = MessageEncoder.jsonEncodeMessage(message);
        }
        return Base64_1.Base64.encode(encodedMessage);
    };
    MessageEncoder.decode = function (message) {
        var decodedMessage = Base64_1.Base64.decode(message);
        if (Json_1.Json.isValid(message)) {
            decodedMessage = Json_1.Json.decode(decodedMessage);
        }
        return decodedMessage;
    };
    MessageEncoder.jsonEncodeMessage = function (message) {
        return Json_1.Json.encode(message);
    };
    return MessageEncoder;
}());
exports.MessageEncoder = MessageEncoder;
//# sourceMappingURL=MessageEncoder.js.map