define(["require", "exports"], function (require, exports) {
    (function (KeyCodes) {
        KeyCodes[KeyCodes["A"] = 65] = "A";
        KeyCodes[KeyCodes["D"] = 68] = "D";
        KeyCodes[KeyCodes["W"] = 87] = "W";
        KeyCodes[KeyCodes["S"] = 83] = "S";
        KeyCodes[KeyCodes["UP"] = 38] = "UP";
        KeyCodes[KeyCodes["DOWN"] = 40] = "DOWN";
        KeyCodes[KeyCodes["LEFT"] = 37] = "LEFT";
        KeyCodes[KeyCodes["Right"] = 39] = "Right";
        KeyCodes[KeyCodes["SPACE"] = 32] = "SPACE";
    })(exports.KeyCodes || (exports.KeyCodes = {}));
    var KeyCodes = exports.KeyCodes;
    ;
});
//# sourceMappingURL=constants.js.map