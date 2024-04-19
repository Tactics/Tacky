"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TypographyStyleProvider = void 0;
var styled_components_1 = require("styled-components");
var TypographyStyleProvider = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), function (props) {
    var _a;
    return (_a = props.resources) === null || _a === void 0 ? void 0 : _a.map(function (resource) {
        return resource;
    });
});
exports.TypographyStyleProvider = TypographyStyleProvider;
var templateObject_1;
