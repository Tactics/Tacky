"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeFonts = void 0;
const use_theme_1 = require("./use-theme");
const useThemeFonts = () => {
    const theme = (0, use_theme_1.useTheme)();
    return theme.typography.fonts;
};
exports.useThemeFonts = useThemeFonts;
