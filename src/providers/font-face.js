"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleProviderFontFace = void 0;
const styled_components_1 = require("styled-components");
const StyleProviderFontFace = (0, styled_components_1.createGlobalStyle) `
      ${(props) => {
    var _a;
    return (_a = props.resources) === null || _a === void 0 ? void 0 : _a.map(function (resource) {
        return resource;
    });
}}
    `;
exports.StyleProviderFontFace = StyleProviderFontFace;
