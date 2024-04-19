import { createGlobalStyle } from "styled-components";

const TypographyStyleProvider = createGlobalStyle<{ resources?: string[] }>`
      ${(props) => {
        return props.resources?.map(function (resource) {
          return resource;
        });
      }}
    `;

export { TypographyStyleProvider };
