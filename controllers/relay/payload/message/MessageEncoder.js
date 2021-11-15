"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEncoder = void 0;
var Json_1 = require("../../../json/Json");
var Base64_1 = require("../../../base64/Base64");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUVuY29kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmVsYXkvcGF5bG9hZC9tZXNzYWdlL01lc3NhZ2VFbmNvZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE2QztBQUM3QyxpREFBbUQ7QUFFbkQ7SUFBQTtJQXlDQSxDQUFDO0lBdkNpQixxQkFBTSxHQUFwQixVQUFzQixPQUFZO1FBRTlCLElBQUksY0FBc0IsQ0FBQztRQUUzQixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRztZQUU5QixjQUFjLEdBQUcsT0FBTyxDQUFDO1NBRTVCO2FBQ0k7WUFFRCxjQUFjLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFFLE9BQU8sQ0FBRSxDQUFDO1NBRWhFO1FBRUQsT0FBTyxlQUFNLENBQUMsTUFBTSxDQUFFLGNBQWMsQ0FBRSxDQUFDO0lBRTNDLENBQUM7SUFFYSxxQkFBTSxHQUFwQixVQUFzQixPQUFlO1FBRWpDLElBQUksY0FBYyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUUsT0FBTyxDQUFFLENBQUM7UUFFOUMsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBRSxFQUFHO1lBRTFCLGNBQWMsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFFLGNBQWMsQ0FBRSxDQUFDO1NBRWxEO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFFMUIsQ0FBQztJQUVjLGdDQUFpQixHQUFoQyxVQUFrQyxPQUFZO1FBRTFDLE9BQU8sV0FBSSxDQUFDLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FBQztJQUVsQyxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBekNZLHdDQUFjIn0=