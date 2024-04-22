"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTheme = exports.baseThemeConfigRadius3Xl = exports.baseThemeConfigRadius2Xl = exports.baseThemeConfigRadiusXl = exports.baseThemeConfigRadiusLg = exports.baseThemeConfigRadiusMd = exports.baseThemeConfigRadiusSm = exports.baseThemeConfigRadiusXs = exports.baseThemeConfigScale9Xl = exports.baseThemeConfigScale8Xl = exports.baseThemeConfigScale7Xl = exports.baseThemeConfigScale6Xl = exports.baseThemeConfigScale5Xl = exports.baseThemeConfigScale4Xl = exports.baseThemeConfigScale3Xl = exports.baseThemeConfigScale2Xl = exports.baseThemeConfigScaleXl = exports.baseThemeConfigScaleLg = exports.baseThemeConfigScaleMd = exports.baseThemeConfigScaleSm = exports.baseThemeConfigScaleXs = exports.baseThemeConfigSupportingFont = exports.baseThemeConfigAccentFont = exports.baseThemeConfigPrimaryFont = void 0;
const font_1 = require("../typography/builder/font");
exports.baseThemeConfigPrimaryFont = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
exports.baseThemeConfigAccentFont = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
exports.baseThemeConfigSupportingFont = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
exports.baseThemeConfigScaleXs = "0.75rem/1rem";
exports.baseThemeConfigScaleSm = "0.875rem/1.25rem";
exports.baseThemeConfigScaleMd = "1rem/1.5rem";
exports.baseThemeConfigScaleLg = "1.125rem/1.75rem";
exports.baseThemeConfigScaleXl = "1.25rem/1.75rem";
exports.baseThemeConfigScale2Xl = "1.5rem/2rem";
exports.baseThemeConfigScale3Xl = "1.875rem/2.25rem";
exports.baseThemeConfigScale4Xl = "2.25rem/2.5rem";
exports.baseThemeConfigScale5Xl = "3rem/1";
exports.baseThemeConfigScale6Xl = "3.75rem/1";
exports.baseThemeConfigScale7Xl = "4.5rem/1";
exports.baseThemeConfigScale8Xl = "6rem/1";
exports.baseThemeConfigScale9Xl = "8rem/1";
exports.baseThemeConfigRadiusXs = "0.125rem";
exports.baseThemeConfigRadiusSm = "0.25rem";
exports.baseThemeConfigRadiusMd = "0.375rem";
exports.baseThemeConfigRadiusLg = "0.5rem";
exports.baseThemeConfigRadiusXl = "0.75rem";
exports.baseThemeConfigRadius2Xl = "1rem";
exports.baseThemeConfigRadius3Xl = "1.5rem";
exports.BaseTheme = {
    alternate: [],
    typography: {
        resources: [],
        fonts: {
            primary: {
                xs: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXs,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                sm: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleSm,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                md: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleMd,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                lg: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleLg,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                xl: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "2xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale2Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "3xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale3Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "4xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale4Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "5xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale5Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "6xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale6Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "7xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale7Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "8xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale8Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
                "9xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale9Xl,
                    family: exports.baseThemeConfigPrimaryFont,
                }),
            },
            accent: {
                xs: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXs,
                    family: exports.baseThemeConfigAccentFont,
                }),
                sm: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleSm,
                    family: exports.baseThemeConfigAccentFont,
                }),
                md: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleMd,
                    family: exports.baseThemeConfigAccentFont,
                }),
                lg: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleLg,
                    family: exports.baseThemeConfigAccentFont,
                }),
                xl: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "2xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale2Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "3xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale3Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "4xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale4Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "5xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale5Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "6xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale6Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "7xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale7Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "8xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale8Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
                "9xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale9Xl,
                    family: exports.baseThemeConfigAccentFont,
                }),
            },
            supporting: {
                xs: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXs,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                sm: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleSm,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                md: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleMd,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                lg: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleLg,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                xl: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "2xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale2Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "3xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale3Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "4xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale4Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "5xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale5Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "6xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale6Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "7xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale7Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "8xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale8Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
                "9xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale9Xl,
                    family: exports.baseThemeConfigSupportingFont,
                }),
            },
        },
    },
    colors: {
        danger: {
            tint_50: "#fef2f2",
            tint_100: "#fee2e2",
            tint_200: "#fecaca",
            tint_300: "#fca5a5",
            tint_400: "#f87171",
            tint_500: "#ef4444",
            tint_600: "#dc2626",
            tint_700: "#b91c1c",
            tint_800: "#991b1b",
            tint_900: "#7f1d1d",
            tint_950: "#450a0a",
        },
        warning: {
            tint_50: "#fffbeb",
            tint_100: "#fef3c7",
            tint_200: "#fde68a",
            tint_300: "#fcd34d",
            tint_400: "#fbbf24",
            tint_500: "#f59e0b",
            tint_600: "#d97706",
            tint_700: "#b45309",
            tint_800: "#92400e",
            tint_900: "#78350f",
            tint_950: "#451a03",
        },
        success: {
            tint_50: "#f7fee7",
            tint_100: "#ecfccb",
            tint_200: "#d9f99d",
            tint_300: "#bef264",
            tint_400: "#a3e635",
            tint_500: "#84cc16",
            tint_600: "#65a30d",
            tint_700: "#4d7c0f",
            tint_800: "#3f6212",
            tint_900: "#365314",
            tint_950: "#1a2e05",
        },
        info: {
            tint_50: "#f0f9ff",
            tint_100: "#e0f2fe",
            tint_200: "#bae6fd",
            tint_300: "#7dd3fc",
            tint_400: "#38bdf8",
            tint_500: "#0ea5e9",
            tint_600: "#0284c7",
            tint_700: "#0369a1",
            tint_800: "#075985",
            tint_900: "#0c4a6e",
            tint_950: "#082f49",
        },
        neutrals: {
            tint_50: "#FFFFFF",
            tint_100: "#FFFFFF",
            tint_200: "#F5F7FA",
            tint_300: "#E5E8EB",
            tint_400: "#E5E8EB",
            tint_500: "#E5E8EB",
            tint_600: "#E5E8EB",
            tint_700: "#E5E8EB",
            tint_800: "#9AA5B1",
            tint_900: "#515F6C",
            tint_950: "#515F6C",
        },
        primary: {
            tint_50: "#E0FCFF",
            tint_100: "#E0FCFF",
            tint_200: "#BEF8FD",
            tint_300: "#87EAF2",
            tint_400: "#54D1DB",
            tint_500: "#38BEC9",
            tint_600: "#2CB1BC",
            tint_700: "#14919B",
            tint_800: "#0E7C86",
            tint_900: "#0A6C74",
            tint_950: "#044E54",
        },
        accent: {
            tint_50: "#fdf3f5",
            tint_100: "#ffe3ec",
            tint_200: "#ffb8d2",
            tint_300: "#ff8cba",
            tint_400: "#f364a2",
            tint_500: "#e8368f",
            tint_600: "#da127d",
            tint_700: "#bc0a6f",
            tint_800: "#a30664",
            tint_900: "#870557",
            tint_950: "#620042",
        },
        supporting: {
            tint_50: "#f1f4fb",
            tint_100: "#e0e8f9",
            tint_200: "#bed0f7",
            tint_300: "#98aeeb",
            tint_400: "#7b93db",
            tint_500: "#647acb",
            tint_600: "#4c63b6",
            tint_700: "#4055a8",
            tint_800: "#35469c",
            tint_900: "#2d3a8c",
            tint_950: "#19216c",
        },
        additional: [],
    },
    utility: {
        spacing: {
            0: "0px",
            px: "1px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem",
        },
        opacity: {
            0: 0,
            5: 0.05,
            10: 0.1,
            15: 0.15,
            20: 0.2,
            25: 0.25,
            30: 0.3,
            35: 0.35,
            40: 0.4,
            45: 0.45,
            50: 0.5,
            55: 0.55,
            60: 0.6,
            65: 0.65,
            70: 0.7,
            75: 0.75,
            80: 0.8,
            85: 0.85,
            90: 0.9,
            95: 0.95,
            100: 1,
        },
    },
    radius: {
        none: "0px",
        xs: exports.baseThemeConfigRadiusXs,
        sm: exports.baseThemeConfigRadiusSm,
        md: exports.baseThemeConfigRadiusMd,
        lg: exports.baseThemeConfigRadiusLg,
        xl: exports.baseThemeConfigRadiusXl,
        "2xl": exports.baseThemeConfigRadius2Xl,
        "3xl": exports.baseThemeConfigRadius3Xl,
        full: "9999px",
    },
};
