"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeColor = void 0;
const use_theme_1 = require("./use-theme");
const useThemeColor = () => {
    const theme = (0, use_theme_1.useTheme)();
    return theme.colors;
};
exports.useThemeColor = useThemeColor;
