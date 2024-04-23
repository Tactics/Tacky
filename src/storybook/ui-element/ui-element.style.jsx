"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiContent = exports.StorybookUiHeadTitle = exports.StorybookUiHead = exports.StorybookUiContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StorybookUiContainer = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
`;
exports.StorybookUiHead = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.color};
    padding-bottom: 1.5rem;
`;
exports.StorybookUiHeadTitle = styled_components_1.default.div `
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`;
exports.StorybookUiContent = styled_components_1.default.div `
    margin-bottom: 5rem;
`;
