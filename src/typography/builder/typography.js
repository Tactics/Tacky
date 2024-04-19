"use strict";
exports.__esModule = true;
exports.TypographyBuilder = void 0;
var resource_1 = require("./resource");
var fonts_1 = require("./fonts");
var TypographyBuilder = function (_a) {
    var _b;
    var base = _a.base, config = _a.config;
    return {
        resources: (config === null || config === void 0 ? void 0 : config.resources)
            ? (0, resource_1.TypographyResourcesBuilder)({
                base: base.resources,
                config: (_b = config === null || config === void 0 ? void 0 : config.resources) !== null && _b !== void 0 ? _b : []
            })
            : base.resources,
        fonts: (config === null || config === void 0 ? void 0 : config.fonts)
            ? (0, fonts_1.TypographyFontsBuilder)({
                base: base.fonts,
                config: (config === null || config === void 0 ? void 0 : config.fonts) ? config.fonts : {}
            })
            : base.fonts
    };
};
exports.TypographyBuilder = TypographyBuilder;
