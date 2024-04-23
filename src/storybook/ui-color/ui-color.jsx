"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiColor = void 0;
const react_1 = __importDefault(require("react"));
const ui_color_style_1 = require("./ui-color.style");
const use_theme_fonts_1 = require("../../hooks/use-theme-fonts");
const use_theme_colors_1 = require("../../hooks/use-theme-colors");
const StorybookUiColor = ({ title, color }) => {
    const typography = (0, use_theme_fonts_1.useThemeFonts)();
    const colors = (0, use_theme_colors_1.useThemeColor)();
    return (<ui_color_style_1.StorybookUiColorPreview>
            <ui_color_style_1.StorybookUiColorPreviewDisplay color={color}>
            </ui_color_style_1.StorybookUiColorPreviewDisplay>
            <ui_color_style_1.StorybookUiColorPreviewDetails>
                <ui_color_style_1.StorybookUiColorPreviewDetailsTitle font={typography.primary.sm} color={colors.neutrals.tint_800}>
                    {title}
                </ui_color_style_1.StorybookUiColorPreviewDetailsTitle>
                <ui_color_style_1.StorybookUiColorPreviewDetailsValue font={typography.primary.xs} color={colors.neutrals.tint_800}>
                    {color}
                </ui_color_style_1.StorybookUiColorPreviewDetailsValue>
            </ui_color_style_1.StorybookUiColorPreviewDetails>
        </ui_color_style_1.StorybookUiColorPreview>);
};
exports.StorybookUiColor = StorybookUiColor;
