"use strict";
exports.__esModule = true;
exports.orDefault = void 0;
function orDefault(json, standard, keys) {
    var _a;
    var currentValue = json;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        // Check if the current value is null or undefined, and fallback to the standard value
        currentValue = (_a = currentValue === null || currentValue === void 0 ? void 0 : currentValue[key]) !== null && _a !== void 0 ? _a : standard;
        // If the current value is null or undefined, break the loop
        if (currentValue === null || currentValue === undefined) {
            break;
        }
    }
    return currentValue;
}
exports.orDefault = orDefault;
