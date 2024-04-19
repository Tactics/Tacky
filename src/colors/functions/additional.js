"use strict";
exports.__esModule = true;
exports.LookupAdditionalColor = void 0;
var LookupAdditionalColor = function (_a) {
    var name = _a.name, colors = _a.colors, fallback = _a.fallback;
    var lookup = colors.find(function (item) { return item.name === name; });
    return lookup ? lookup.color : fallback;
};
exports.LookupAdditionalColor = LookupAdditionalColor;
