"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiElement = void 0;
const react_1 = __importDefault(require("react"));
const ui_element_style_1 = require("./../ui-element/ui-element.style");
const use_theme_fonts_1 = require("./../../hooks/use-theme-fonts");
const use_theme_colors_1 = require("./../../hooks/use-theme-colors");
const StorybookUiElement = ({ title, children }) => {
    const typography = (0, use_theme_fonts_1.useThemeFonts)();
    const color = (0, use_theme_colors_1.useThemeColor)();
    return (<ui_element_style_1.StorybookUiContainer>
            <ui_element_style_1.StorybookUiHead color={color.neutrals.tint_500}>
                <ui_element_style_1.StorybookUiHeadTitle font={typography.primary.xl} color={color.neutrals.tint_950}>
                        {title}
                </ui_element_style_1.StorybookUiHeadTitle>
            </ui_element_style_1.StorybookUiHead>
            <ui_element_style_1.StorybookUiContent>
                {children}
            </ui_element_style_1.StorybookUiContent>
        </ui_element_style_1.StorybookUiContainer>);
};
exports.StorybookUiElement = StorybookUiElement;
