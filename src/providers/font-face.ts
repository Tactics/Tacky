import { createGlobalStyle } from "styled-components";

const StyleProviderFontFace = createGlobalStyle<{ resources?: string[] }>`
      ${(props) => {
        return props.resources?.map(function (resource) {
          return resource;
        });
      }}
    `;

export { StyleProviderFontFace };
