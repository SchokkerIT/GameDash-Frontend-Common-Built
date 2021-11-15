"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDecoder = void 0;
var Json_1 = require("controllers/json/Json");
var Base64_1 = require("controllers/base64/Base64");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZURlY29kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvcGF5bG9hZC9tZXNzYWdlL01lc3NhZ2VEZWNvZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE2QztBQUM3QyxvREFBbUQ7QUFFbkQ7SUFBQTtJQXNCQSxDQUFDO0lBcEJpQixxQkFBTSxHQUFwQixVQUFzQixPQUFZO1FBRTlCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFHO1lBRTlCLE9BQU8sT0FBTyxDQUFDO1NBRWxCO1FBRUQsSUFBSSxjQUFjLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FBQztRQUU5QyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUUsY0FBYyxDQUFFLEVBQUc7WUFFakMsY0FBYyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUUsY0FBYyxDQUFFLENBQUM7U0FFbEQ7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUUxQixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIn0=