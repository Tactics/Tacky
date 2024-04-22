"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternateBuilder = void 0;
const AlternateBuilder = ({ base, config, }) => {
    return config ? config : base;
};
exports.AlternateBuilder = AlternateBuilder;
