"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orDefault = void 0;
function orDefault(json, standard, keys) {
    var _a;
    let currentValue = json;
    for (const key of keys) {
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
