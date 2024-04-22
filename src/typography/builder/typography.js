"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyBuilder = void 0;
const resource_1 = require("./resource");
const fonts_1 = require("./fonts");
const TypographyBuilder = ({ base, config, }) => {
    var _a;
    return {
        resources: (config === null || config === void 0 ? void 0 : config.resources)
            ? (0, resource_1.TypographyResourcesBuilder)({
                base: base.resources,
                config: (_a = config === null || config === void 0 ? void 0 : config.resources) !== null && _a !== void 0 ? _a : [],
            })
            : base.resources,
        fonts: (config === null || config === void 0 ? void 0 : config.fonts)
            ? (0, fonts_1.TypographyFontsBuilder)({
                base: base.fonts,
                config: (config === null || config === void 0 ? void 0 : config.fonts) ? config.fonts : {},
            })
            : base.fonts,
    };
};
exports.TypographyBuilder = TypographyBuilder;
