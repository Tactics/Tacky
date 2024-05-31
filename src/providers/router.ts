import { createGlobalStyle } from "styled-components";

const StyleProviderRouter = createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;

export { StyleProviderRouter };
