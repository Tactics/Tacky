"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiColorPreviewDetailsValue = exports.StorybookUiColorPreviewDetailsTitle = exports.StorybookUiColorPreviewDetails = exports.StorybookUiColorPreviewDisplay = exports.StorybookUiColorPreview = exports.StorybookUiColorPreviewList = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StorybookUiColorPreviewList = styled_components_1.default.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`;
exports.StorybookUiColorPreview = styled_components_1.default.div `
    flex-grow: 1;
`;
exports.StorybookUiColorPreviewDisplay = styled_components_1.default.div `
    background: ${(props) => props.color};
    box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
    border-radius: 8px;
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0.5rem;
`;
exports.StorybookUiColorPreviewDetails = styled_components_1.default.div `
`;
exports.StorybookUiColorPreviewDetailsTitle = styled_components_1.default.div `
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`;
exports.StorybookUiColorPreviewDetailsValue = styled_components_1.default.div `
    margin-top: .25rem;
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`;
