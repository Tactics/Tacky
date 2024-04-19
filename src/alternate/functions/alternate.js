"use strict";
exports.__esModule = true;
exports.LookupAlternate = void 0;
var LookupAlternate = function (_a) {
    var name = _a.name, alternates = _a.alternates;
    return alternates.find(function (item) { return item.name === name; });
};
exports.LookupAlternate = LookupAlternate;
