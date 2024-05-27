import {
  TypographyFontsConfigI,
  TypographyFontsI,
} from "@/typography/contracts/fonts";
import {
  baseThemeConfigAccentFont,
  baseThemeConfigPrimaryFont,
  baseThemeConfigScale2Xl,
  baseThemeConfigScale3Xl,
  baseThemeConfigScale4Xl,
  baseThemeConfigScale5Xl,
  baseThemeConfigScale6Xl,
  baseThemeConfigScale7Xl,
  baseThemeConfigScale8Xl,
  baseThemeConfigScale9Xl,
  baseThemeConfigScaleLg,
  baseThemeConfigScaleMd,
  baseThemeConfigScaleSm,
  baseThemeConfigScaleXl,
  baseThemeConfigScaleXs,
  baseThemeConfigSupportingFont,
} from "@/base/theme";
import { orDefault } from "@/tooling/or-default";
import { FontBuilder } from "@/typography/builder/font";

const TypographyFontsBuilder = ({
  base,
  config,
}: {
  base: TypographyFontsI;
  config: TypographyFontsConfigI;
}): TypographyFontsI => {
  // Base
  const primaryFont = orDefault(config, baseThemeConfigPrimaryFont, [
    "family",
    "primary",
  ]);

  const accentFont = orDefault(
    config,
    orDefault(config, baseThemeConfigAccentFont, ["family", "primary"]),
    ["family", "accent"],
  );

  const supportingFont = orDefault(
    config,
    orDefault(config, baseThemeConfigSupportingFont, ["family", "primary"]),
    ["family", "supporting"],
  );

  const mdScale = orDefault(config, baseThemeConfigScaleMd, ["scale", "md"]);

  const smScale = orDefault(config, baseThemeConfigScaleSm, ["scale", "sm"]);

  const xsScale = orDefault(config, baseThemeConfigScaleXs, ["scale", "xs"]);

  const lgScale = orDefault(config, baseThemeConfigScaleLg, ["scale", "lg"]);

  const xlScale = orDefault(config, baseThemeConfigScaleXl, ["scale", "xl"]);

  const xl2Scale = orDefault(config, baseThemeConfigScale2Xl, ["scale", "2xl"]);

  const xl3Scale = orDefault(config, baseThemeConfigScale3Xl, ["scale", "3xl"]);

  const xl4Scale = orDefault(config, baseThemeConfigScale4Xl, ["scale", "4xl"]);

  const xl5Scale = orDefault(config, baseThemeConfigScale5Xl, ["scale", "5xl"]);

  const xl6Scale = orDefault(config, baseThemeConfigScale6Xl, ["scale", "6xl"]);

  const xl7Scale = orDefault(config, baseThemeConfigScale7Xl, ["scale", "7xl"]);

  const xl8Scale = orDefault(config, baseThemeConfigScale8Xl, ["scale", "8xl"]);

  const xl9Scale = orDefault(config, baseThemeConfigScale9Xl, ["scale", "9xl"]);

  return {
    primary: {
      xs: FontBuilder({
        family: primaryFont,
        scale: xsScale,
      }),
      sm: FontBuilder({
        family: primaryFont,
        scale: smScale,
      }),
      md: FontBuilder({
        family: primaryFont,
        scale: mdScale,
      }),
      lg: FontBuilder({
        family: primaryFont,
        scale: lgScale,
      }),
      xl: FontBuilder({
        family: primaryFont,
        scale: xlScale,
      }),
      "2xl": FontBuilder({
        family: primaryFont,
        scale: xl2Scale,
      }),
      "3xl": FontBuilder({
        family: primaryFont,
        scale: xl3Scale,
      }),
      "4xl": FontBuilder({
        family: primaryFont,
        scale: xl4Scale,
      }),
      "5xl": FontBuilder({
        family: primaryFont,
        scale: xl5Scale,
      }),
      "6xl": FontBuilder({
        family: primaryFont,
        scale: xl6Scale,
      }),
      "7xl": FontBuilder({
        family: primaryFont,
        scale: xl7Scale,
      }),
      "8xl": FontBuilder({
        family: primaryFont,
        scale: xl8Scale,
      }),
      "9xl": FontBuilder({
        family: primaryFont,
        scale: xl9Scale,
      }),
    },
    accent: {
      xs: FontBuilder({
        family: accentFont,
        scale: xsScale,
      }),
      sm: FontBuilder({
        family: accentFont,
        scale: smScale,
      }),
      md: FontBuilder({
        family: accentFont,
        scale: mdScale,
      }),
      lg: FontBuilder({
        family: accentFont,
        scale: lgScale,
      }),
      xl: FontBuilder({
        family: accentFont,
        scale: xlScale,
      }),
      "2xl": FontBuilder({
        family: accentFont,
        scale: xl2Scale,
      }),
      "3xl": FontBuilder({
        family: accentFont,
        scale: xl3Scale,
      }),
      "4xl": FontBuilder({
        family: accentFont,
        scale: xl4Scale,
      }),
      "5xl": FontBuilder({
        family: accentFont,
        scale: xl5Scale,
      }),
      "6xl": FontBuilder({
        family: accentFont,
        scale: xl6Scale,
      }),
      "7xl": FontBuilder({
        family: accentFont,
        scale: xl7Scale,
      }),
      "8xl": FontBuilder({
        family: accentFont,
        scale: xl8Scale,
      }),
      "9xl": FontBuilder({
        family: accentFont,
        scale: xl9Scale,
      }),
    },
    supporting: {
      xs: FontBuilder({
        family: supportingFont,
        scale: xsScale,
      }),
      sm: FontBuilder({
        family: supportingFont,
        scale: smScale,
      }),
      md: FontBuilder({
        family: supportingFont,
        scale: mdScale,
      }),
      lg: FontBuilder({
        family: supportingFont,
        scale: lgScale,
      }),
      xl: FontBuilder({
        family: supportingFont,
        scale: xlScale,
      }),
      "2xl": FontBuilder({
        family: supportingFont,
        scale: xl2Scale,
      }),
      "3xl": FontBuilder({
        family: supportingFont,
        scale: xl3Scale,
      }),
      "4xl": FontBuilder({
        family: supportingFont,
        scale: xl4Scale,
      }),
      "5xl": FontBuilder({
        family: supportingFont,
        scale: xl5Scale,
      }),
      "6xl": FontBuilder({
        family: supportingFont,
        scale: xl6Scale,
      }),
      "7xl": FontBuilder({
        family: supportingFont,
        scale: xl7Scale,
      }),
      "8xl": FontBuilder({
        family: supportingFont,
        scale: xl8Scale,
      }),
      "9xl": FontBuilder({
        family: supportingFont,
        scale: xl9Scale,
      }),
    },
  };
};

export { TypographyFontsBuilder };
