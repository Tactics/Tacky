"use strict";
exports.__esModule = true;
exports.TypographyFontsBuilder = void 0;
var theme_1 = require("../../base/theme");
var or_default_1 = require("../../tooling/or-default");
var font_1 = require("./font");
var TypographyFontsBuilder = function (_a) {
    var base = _a.base, config = _a.config;
    // Base
    var primaryFont = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigPrimaryFont, [
        "family",
        "primary",
    ]);
    var accentFont = (0, or_default_1.orDefault)(config, (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigAccentFont, ["family", "primary"]), ["family", "accent"]);
    var supportingFont = (0, or_default_1.orDefault)(config, (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigSupportingFont, ["family", "primary"]), ["family", "supporting"]);
    var mdScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleMd, ["scale", "md"]);
    var smScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleSm, ["scale", "sm"]);
    var xsScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleXs, ["scale", "xs"]);
    var lgScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleLg, ["scale", "lg"]);
    var xlScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleXl, ["scale", "xl"]);
    var xl2Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale2Xl, ["scale", "2xl"]);
    var xl3Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale3Xl, ["scale", "3xl"]);
    var xl4Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale4Xl, ["scale", "4xl"]);
    var xl5Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale5Xl, ["scale", "5xl"]);
    var xl6Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale6Xl, ["scale", "6xl"]);
    var xl7Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale7Xl, ["scale", "7xl"]);
    var xl8Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale8Xl, ["scale", "8xl"]);
    var xl9Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale9Xl, ["scale", "9xl"]);
    return {
        primary: {
            xs: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xsScale
            }),
            sm: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: smScale
            }),
            md: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: mdScale
            }),
            lg: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: lgScale
            }),
            xl: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xlScale
            }),
            "2xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl2Scale
            }),
            "3xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl3Scale
            }),
            "4xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl4Scale
            }),
            "5xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl5Scale
            }),
            "6xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl6Scale
            }),
            "7xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl7Scale
            }),
            "8xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl8Scale
            }),
            "9xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl9Scale
            })
        },
        accent: {
            xs: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xsScale
            }),
            sm: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: smScale
            }),
            md: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: mdScale
            }),
            lg: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: lgScale
            }),
            xl: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xlScale
            }),
            "2xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl2Scale
            }),
            "3xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl3Scale
            }),
            "4xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl4Scale
            }),
            "5xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl5Scale
            }),
            "6xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl6Scale
            }),
            "7xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl7Scale
            }),
            "8xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl8Scale
            }),
            "9xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl9Scale
            })
        },
        supporting: {
            xs: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xsScale
            }),
            sm: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: smScale
            }),
            md: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: mdScale
            }),
            lg: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: lgScale
            }),
            xl: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xlScale
            }),
            "2xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl2Scale
            }),
            "3xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl3Scale
            }),
            "4xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl4Scale
            }),
            "5xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl5Scale
            }),
            "6xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl6Scale
            }),
            "7xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl7Scale
            }),
            "8xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl8Scale
            }),
            "9xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl9Scale
            })
        }
    };
};
exports.TypographyFontsBuilder = TypographyFontsBuilder;
