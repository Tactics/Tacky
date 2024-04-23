"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiItemContent = exports.StorybookUiItemCaption = exports.StorybookUiItemContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StorybookUiItemContainer = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
`;
exports.StorybookUiItemCaption = styled_components_1.default.div `
    font: ${(props) => props.font};
    margin-bottom: 1rem;
    color: ${(props) => props.color};
`;
exports.StorybookUiItemContent = styled_components_1.default.div `
    margin-bottom: 1rem;
`;
