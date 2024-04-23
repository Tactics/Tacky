"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiFontPreview = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StorybookUiFontPreview = styled_components_1.default.div `
    font: ${(props) => props.font};
`;
