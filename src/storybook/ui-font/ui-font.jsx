"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiFont = void 0;
const react_1 = __importDefault(require("react"));
const ui_font_style_1 = require("./ui-font.style");
const StorybookUiFont = ({ text, font }) => {
    return (<ui_font_style_1.StorybookUiFontPreview font={font}>
            {text}
        </ui_font_style_1.StorybookUiFontPreview>);
};
exports.StorybookUiFont = StorybookUiFont;
