"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeModeCtx = void 0;
const react_1 = require("react");
const theme_mode_1 = require("../theme/enums/theme-mode");
exports.ThemeModeCtx = (0, react_1.createContext)(theme_mode_1.ThemeMode.STANDARD);
