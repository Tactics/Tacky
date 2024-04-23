"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleProviderAnimation = void 0;
const styled_components_1 = require("styled-components");
const StyleProviderAnimation = (0, styled_components_1.createGlobalStyle) `
      ${(props) => {
    var _a;
    return (_a = props.animations) === null || _a === void 0 ? void 0 : _a.map(function (animation) {
        return animation;
    });
}}

      @keyframes spin {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(360deg);
          }
      }

      @keyframes ping {
          75%, 100% {
              transform: scale(2);
              opacity: 0;
          }
      }

      @keyframes pulse {
          0%, 100% {
              opacity: 1;
          }
          50% {
              opacity: .5;
          }
      }

      @keyframes bounce {
          0%, 100% {
              transform: translateY(-25%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
      }
`;
exports.StyleProviderAnimation = StyleProviderAnimation;
