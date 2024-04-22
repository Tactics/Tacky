"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupAlternate = void 0;
const LookupAlternate = ({ name, alternates, }) => {
    return alternates.find((item) => item.name === name);
};
exports.LookupAlternate = LookupAlternate;
