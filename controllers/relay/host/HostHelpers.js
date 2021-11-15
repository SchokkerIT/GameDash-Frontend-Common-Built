"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostHelpers = void 0;
var HostHelpers = /** @class */ (function () {
    function HostHelpers() {
    }
    HostHelpers.isProxyable = function (host) {
        return host.getProxy !== undefined;
    };
    return HostHelpers;
}());
exports.HostHelpers = HostHelpers;
//# sourceMappingURL=HostHelpers.js.map