import {
  TypographyConfigI,
  TypographyI,
} from "@/typography/contracts/typography";
import { ColorsConfigI, ColorsI } from "@/colors/contracts/colors";
import { RadiusConfigI, RadiusI } from "@/radius/contracts/radius";
import { AlternateItem } from "@/alternate/contracts/alternate";
import { UtilityI } from "@/utility/contracts/utility";
import { ShadowConfigI, ShadowI } from "@/shadow/contracts/shadow";

export interface ThemeI {
  settings: Record<string, string>;
  alternate: Array<AlternateItem>;
  colors: ColorsI;
  typography: TypographyI;
  radius: RadiusI;
  utility: UtilityI;
  shadow: ShadowI;
}

export interface ThemeConfigI {
  /**
   * Additional settings for a certain theme that are not structural things to apply in every theme.
   * These are settings that are not part of the base theme, but related to the theme.
   *
   * This can be anything, but the theme needs to provide a fallback when setting is not set.
   * The same principle as .env settings it used, therefor all values are strings and need to be parsed by the consumer.
   *
   * Example:
   * {
   *     "iconLibrary": "nucleo",
   *     "reducedVisuals": "true",
   * }
   *
   */
  settings?: Record<string, string>;

  /**
   * The optional alternate items to override specific component styles of the theme.
   * @see useAlternateTheme();
   *
   * Example:
   *
   * {
   *   "name": "Component.ELEMENT",
   *   "theme": {
   *     "Init": {
   *       "BackgroundColor": "#e0ebf6",
   *       "Border": {
   *         "Width": 1,
   *         "Color": "#e0ebf6",
   *         "Style": "solid"
   *       }
   *     },
   * }
   *
   */
  alternate?: Array<AlternateItem>;

  /**
   * The main color config of the theme.
   */
  colors?: ColorsConfigI;

  /**
   * The typography config of the theme.
   */
  typography?: TypographyConfigI;

  /**
   * The different radius sizes of the theme.
   */
  radius?: RadiusConfigI;

  /**
   * The different shadow sizes of the theme.
   */
  shadow?: ShadowConfigI;
}
