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
  baseThemeConfigWeight2Xl,
  baseThemeConfigWeight3Xl,
  baseThemeConfigWeight4Xl,
  baseThemeConfigWeight5Xl,
  baseThemeConfigWeight6Xl,
  baseThemeConfigWeight7Xl,
  baseThemeConfigWeight8Xl,
  baseThemeConfigWeight9Xl,
  baseThemeConfigWeightLg,
  baseThemeConfigWeightMd,
  baseThemeConfigWeightSm,
  baseThemeConfigWeightXl,
  baseThemeConfigWeightXs,
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

  const mdWeight = orDefault(config, baseThemeConfigWeightMd, ["weight", "md"]);

  const smWeight = orDefault(config, baseThemeConfigWeightSm, ["weight", "sm"]);

  const xsWeight = orDefault(config, baseThemeConfigWeightXs, ["weight", "xs"]);

  const lgWeight = orDefault(config, baseThemeConfigWeightLg, ["weight", "lg"]);

  const xlWeight = orDefault(config, baseThemeConfigWeightXl, ["weight", "xl"]);

  const xl2Weight = orDefault(config, baseThemeConfigWeight2Xl, [
    "weight",
    "2xl",
  ]);

  const xl3Weight = orDefault(config, baseThemeConfigWeight3Xl, [
    "weight",
    "3xl",
  ]);

  const xl4Weight = orDefault(config, baseThemeConfigWeight4Xl, [
    "weight",
    "4xl",
  ]);

  const xl5Weight = orDefault(config, baseThemeConfigWeight5Xl, [
    "weight",
    "5xl",
  ]);

  const xl6Weight = orDefault(config, baseThemeConfigWeight6Xl, [
    "weight",
    "6xl",
  ]);

  const xl7Weight = orDefault(config, baseThemeConfigWeight7Xl, [
    "weight",
    "7xl",
  ]);

  const xl8Weight = orDefault(config, baseThemeConfigWeight8Xl, [
    "weight",
    "8xl",
  ]);

  const xl9Weight = orDefault(config, baseThemeConfigWeight9Xl, [
    "weight",
    "9xl",
  ]);

  return {
    primary: {
      xs: FontBuilder({
        family: primaryFont,
        scale: xsScale,
        weight: xsWeight,
      }),
      sm: FontBuilder({
        family: primaryFont,
        scale: smScale,
        weight: smWeight,
      }),
      md: FontBuilder({
        family: primaryFont,
        scale: mdScale,
        weight: mdWeight,
      }),
      lg: FontBuilder({
        family: primaryFont,
        scale: lgScale,
        weight: lgWeight,
      }),
      xl: FontBuilder({
        family: primaryFont,
        scale: xlScale,
        weight: xlWeight,
      }),
      "2xl": FontBuilder({
        family: primaryFont,
        scale: xl2Scale,
        weight: xl2Weight,
      }),
      "3xl": FontBuilder({
        family: primaryFont,
        scale: xl3Scale,
        weight: xl3Weight,
      }),
      "4xl": FontBuilder({
        family: primaryFont,
        scale: xl4Scale,
        weight: xl4Weight,
      }),
      "5xl": FontBuilder({
        family: primaryFont,
        scale: xl5Scale,
        weight: xl5Weight,
      }),
      "6xl": FontBuilder({
        family: primaryFont,
        scale: xl6Scale,
        weight: xl6Weight,
      }),
      "7xl": FontBuilder({
        family: primaryFont,
        scale: xl7Scale,
        weight: xl7Weight,
      }),
      "8xl": FontBuilder({
        family: primaryFont,
        scale: xl8Scale,
        weight: xl8Weight,
      }),
      "9xl": FontBuilder({
        family: primaryFont,
        scale: xl9Scale,
        weight: xl9Weight,
      }),
    },
    accent: {
      xs: FontBuilder({
        family: accentFont,
        scale: xsScale,
        weight: xsWeight,
      }),
      sm: FontBuilder({
        family: accentFont,
        scale: smScale,
        weight: smWeight,
      }),
      md: FontBuilder({
        family: accentFont,
        scale: mdScale,
        weight: mdWeight,
      }),
      lg: FontBuilder({
        family: accentFont,
        scale: lgScale,
        weight: lgWeight,
      }),
      xl: FontBuilder({
        family: accentFont,
        scale: xlScale,
        weight: xlWeight,
      }),
      "2xl": FontBuilder({
        family: accentFont,
        scale: xl2Scale,
        weight: xl2Weight,
      }),
      "3xl": FontBuilder({
        family: accentFont,
        scale: xl3Scale,
        weight: xl3Weight,
      }),
      "4xl": FontBuilder({
        family: accentFont,
        scale: xl4Scale,
        weight: xl4Weight,
      }),
      "5xl": FontBuilder({
        family: accentFont,
        scale: xl5Scale,
        weight: xl5Weight,
      }),
      "6xl": FontBuilder({
        family: accentFont,
        scale: xl6Scale,
        weight: xl6Weight,
      }),
      "7xl": FontBuilder({
        family: accentFont,
        scale: xl7Scale,
        weight: xl7Weight,
      }),
      "8xl": FontBuilder({
        family: accentFont,
        scale: xl8Scale,
        weight: xl8Weight,
      }),
      "9xl": FontBuilder({
        family: accentFont,
        scale: xl9Scale,
        weight: xl9Weight,
      }),
    },
    supporting: {
      xs: FontBuilder({
        family: supportingFont,
        scale: xsScale,
        weight: xsWeight,
      }),
      sm: FontBuilder({
        family: supportingFont,
        scale: smScale,
        weight: smWeight,
      }),
      md: FontBuilder({
        family: supportingFont,
        scale: mdScale,
        weight: mdWeight,
      }),
      lg: FontBuilder({
        family: supportingFont,
        scale: lgScale,
        weight: lgWeight,
      }),
      xl: FontBuilder({
        family: supportingFont,
        scale: xlScale,
        weight: xlWeight,
      }),
      "2xl": FontBuilder({
        family: supportingFont,
        scale: xl2Scale,
        weight: xl2Weight,
      }),
      "3xl": FontBuilder({
        family: supportingFont,
        scale: xl3Scale,
        weight: xl3Weight,
      }),
      "4xl": FontBuilder({
        family: supportingFont,
        scale: xl4Scale,
        weight: xl4Weight,
      }),
      "5xl": FontBuilder({
        family: supportingFont,
        scale: xl5Scale,
        weight: xl5Weight,
      }),
      "6xl": FontBuilder({
        family: supportingFont,
        scale: xl6Scale,
        weight: xl6Weight,
      }),
      "7xl": FontBuilder({
        family: supportingFont,
        scale: xl7Scale,
        weight: xl7Weight,
      }),
      "8xl": FontBuilder({
        family: supportingFont,
        scale: xl8Scale,
        weight: xl8Weight,
      }),
      "9xl": FontBuilder({
        family: supportingFont,
        scale: xl9Scale,
        weight: xl9Weight,
      }),
    },
  };
};

export { TypographyFontsBuilder };
