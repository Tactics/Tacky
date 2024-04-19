import {HexColor} from "./src/colors/contracts/hex";
import {ColorsI} from "./src/colors/contracts/colors";
import { AnimationStyleProvider } from "./src/providers/animation-style-provider";
import { TypographyStyleProvider } from "./src/providers/typography-style-provider";
import { ThemeBuilder } from "./src/theme/builders/theme";
import {ThemeConfigI, ThemeI } from "./src/theme/contracts/theme";
import { ThemeMode, ThemeModeOptionKey, ThemeModeOptions } from "./src/theme/enums/theme-mode";
import { orDefault } from "./src/tooling/or-default";
import { LookupAlternate } from "./src/alternate/functions/alternate";
import { LookupAdditionalColor } from "./src/colors/functions/additional";
import { BuildProvidersTree } from "./src/tooling/build-provider-tree";
import { ThemeCtx } from "./src/contexts/theme-context";
import { ThemeModeCtx } from "./src/contexts/theme-mode-context";
import { ThemeVariantsI } from "./src/theme/contracts/theme-variant";
import { BaseTheme } from "./src/base/theme";

export {
    AnimationStyleProvider,
    TypographyStyleProvider,
    BuildProvidersTree,
    ThemeBuilder,
    ThemeMode,
    orDefault,
    LookupAlternate,
    LookupAdditionalColor,
    ThemeModeCtx,
    ThemeCtx,
    BaseTheme,
    /** Add your components here for short imports in the project using this component library **/

};

export type {
    HexColor,
    ThemeI,
    ThemeConfigI,
    ThemeVariantsI,
    ColorsI,
    ThemeModeOptionKey,
    ThemeModeOptions,
    /** Add your types here for short imports in the project using this component library **/

};
