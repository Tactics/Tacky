import { ThemeConfigI, ThemeI } from "../contracts/theme";
declare const ThemeBuilder: ({ base, config, }: {
    base: ThemeI;
    config: ThemeConfigI;
}) => ThemeI;
export { ThemeBuilder };
