"use strict";
exports.__esModule = true;
exports.ThemeModeCtx = void 0;
var react_1 = require("react");
var theme_mode_1 = require("../theme/enums/theme-mode");
exports.ThemeModeCtx = (0, react_1.createContext)(theme_mode_1.ThemeMode.STANDARD);
