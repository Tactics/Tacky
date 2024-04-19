"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AnimationStyleProvider = void 0;
var styled_components_1 = require("styled-components");
var AnimationStyleProvider = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n\n      @keyframes spin {\n          from {\n              transform: rotate(0deg);\n          }\n          to {\n              transform: rotate(360deg);\n          }\n      }\n\n      @keyframes ping {\n          75%, 100% {\n              transform: scale(2);\n              opacity: 0;\n          }\n      }\n\n      @keyframes pulse {\n          0%, 100% {\n              opacity: 1;\n          }\n          50% {\n              opacity: .5;\n          }\n      }\n\n      @keyframes bounce {\n          0%, 100% {\n              transform: translateY(-25%);\n              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n          }\n          50% {\n              transform: translateY(0);\n              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n          }\n      }\n"], ["\n      ", "\n\n      @keyframes spin {\n          from {\n              transform: rotate(0deg);\n          }\n          to {\n              transform: rotate(360deg);\n          }\n      }\n\n      @keyframes ping {\n          75%, 100% {\n              transform: scale(2);\n              opacity: 0;\n          }\n      }\n\n      @keyframes pulse {\n          0%, 100% {\n              opacity: 1;\n          }\n          50% {\n              opacity: .5;\n          }\n      }\n\n      @keyframes bounce {\n          0%, 100% {\n              transform: translateY(-25%);\n              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n          }\n          50% {\n              transform: translateY(0);\n              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n          }\n      }\n"])), function (props) {
    var _a;
    return (_a = props.animations) === null || _a === void 0 ? void 0 : _a.map(function (animation) {
        return animation;
    });
});
exports.AnimationStyleProvider = AnimationStyleProvider;
var templateObject_1;
