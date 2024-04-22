"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupAdditionalColor = void 0;
const LookupAdditionalColor = ({ name, colors, fallback, }) => {
    const lookup = colors.find((item) => item.name === name);
    return lookup ? lookup.color : fallback;
};
exports.LookupAdditionalColor = LookupAdditionalColor;
