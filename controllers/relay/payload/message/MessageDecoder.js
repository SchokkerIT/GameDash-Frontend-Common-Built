"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDecoder = void 0;
var Json_1 = require("../../../json/Json");
var Base64_1 = require("../../../base64/Base64");
var MessageDecoder = /** @class */ (function () {
    function MessageDecoder() {
    }
    MessageDecoder.decode = function (message) {
        if (typeof message !== 'string') {
            return message;
        }
        var decodedMessage = Base64_1.Base64.decode(message);
        if (Json_1.Json.isValid(decodedMessage)) {
            decodedMessage = Json_1.Json.decode(decodedMessage);
        }
        return decodedMessage;
    };
    return MessageDecoder;
}());
exports.MessageDecoder = MessageDecoder;
//# sourceMappingURL=MessageDecoder.js.map