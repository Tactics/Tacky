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
  alternate: Array<AlternateItem>;
  colors: ColorsI;
  typography: TypographyI;
  radius: RadiusI;
  utility: UtilityI;
  shadow: ShadowI;
}

export interface ThemeConfigI {
  alternate?: Array<AlternateItem>;
  colors?: ColorsConfigI;
  typography?: TypographyConfigI;
  radius?: RadiusConfigI;
  shadow?: ShadowConfigI;
}
