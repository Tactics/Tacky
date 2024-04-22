"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyStyleProvider = void 0;
const styled_components_1 = require("styled-components");
const TypographyStyleProvider = (0, styled_components_1.createGlobalStyle) `
      ${(props) => {
    var _a;
    return (_a = props.resources) === null || _a === void 0 ? void 0 : _a.map(function (resource) {
        return resource;
    });
}}
    `;
exports.TypographyStyleProvider = TypographyStyleProvider;
