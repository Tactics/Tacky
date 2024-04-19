"use strict";
exports.__esModule = true;
exports.ColorBuilder = void 0;
var variant_1 = require("./variant");
var additional_1 = require("./additional");
var ColorBuilder = function (_a) {
    var base = _a.base, config = _a.config;
    return {
        danger: (0, variant_1.ColorVariantBuilder)({
            base: base.danger,
            config: config.danger ? config.danger : {}
        }),
        warning: (0, variant_1.ColorVariantBuilder)({
            base: base.warning,
            config: config.warning ? config.warning : {}
        }),
        success: (0, variant_1.ColorVariantBuilder)({
            base: base.success,
            config: config.success ? config.success : {}
        }),
        info: (0, variant_1.ColorVariantBuilder)({
            base: base.info,
            config: config.info ? config.info : {}
        }),
        neutrals: (0, variant_1.ColorVariantBuilder)({
            base: base.neutrals,
            config: config.neutrals ? config.neutrals : {}
        }),
        primary: (0, variant_1.ColorVariantBuilder)({
            base: base.primary,
            config: config.primary ? config.primary : {}
        }),
        accent: (0, variant_1.ColorVariantBuilder)({
            base: base.accent,
            config: config.accent ? config.accent : {}
        }),
        supporting: (0, variant_1.ColorVariantBuilder)({
            base: base.supporting,
            config: config.supporting ? config.supporting : {}
        }),
        additional: (0, additional_1.AdditionalColorBuilder)({
            base: base.additional,
            config: (config === null || config === void 0 ? void 0 : config.additional) ? config.additional : []
        })
    };
};
exports.ColorBuilder = ColorBuilder;
