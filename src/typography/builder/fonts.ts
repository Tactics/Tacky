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
      xs: {
        thin: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xsScale,
          weight: 900,
        }),
      },
      sm: {
        thin: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: smScale,
          weight: 900,
        }),
      },
      md: {
        thin: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: mdScale,
          weight: 900,
        }),
      },
      lg: {
        thin: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: lgScale,
          weight: 900,
        }),
      },
      xl: {
        thin: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xlScale,
          weight: 900,
        }),
      },
      "2xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl2Scale,
          weight: 900,
        }),
      },
      "3xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl3Scale,
          weight: 900,
        }),
      },
      "4xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl4Scale,
          weight: 900,
        }),
      },
      "5xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl5Scale,
          weight: 900,
        }),
      },
      "6xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl6Scale,
          weight: 900,
        }),
      },
      "7xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl7Scale,
          weight: 900,
        }),
      },
      "8xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl8Scale,
          weight: 900,
        }),
      },
      "9xl": {
        thin: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: primaryFont,
          scale: xl9Scale,
          weight: 900,
        }),
      },
    },
    supporting: {
      xs: {
        thin: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xsScale,
          weight: 900,
        }),
      },
      sm: {
        thin: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: smScale,
          weight: 900,
        }),
      },
      md: {
        thin: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: mdScale,
          weight: 900,
        }),
      },
      lg: {
        thin: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: lgScale,
          weight: 900,
        }),
      },
      xl: {
        thin: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xlScale,
          weight: 900,
        }),
      },
      "2xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl2Scale,
          weight: 900,
        }),
      },
      "3xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl3Scale,
          weight: 900,
        }),
      },
      "4xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl4Scale,
          weight: 900,
        }),
      },
      "5xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl5Scale,
          weight: 900,
        }),
      },
      "6xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl6Scale,
          weight: 900,
        }),
      },
      "7xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl7Scale,
          weight: 900,
        }),
      },
      "8xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl8Scale,
          weight: 900,
        }),
      },
      "9xl": {
        thin: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: supportingFont,
          scale: xl9Scale,
          weight: 900,
        }),
      },
    },
    accent: {
      xs: {
        thin: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xsScale,
          weight: 900,
        }),
      },
      sm: {
        thin: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: smScale,
          weight: 900,
        }),
      },
      md: {
        thin: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: mdScale,
          weight: 900,
        }),
      },
      lg: {
        thin: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: lgScale,
          weight: 900,
        }),
      },
      xl: {
        thin: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xlScale,
          weight: 900,
        }),
      },
      "2xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl2Scale,
          weight: 900,
        }),
      },
      "3xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl3Scale,
          weight: 900,
        }),
      },
      "4xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl4Scale,
          weight: 900,
        }),
      },
      "5xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl5Scale,
          weight: 900,
        }),
      },
      "6xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: primaryFont,
          scale: accentFont,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl6Scale,
          weight: 900,
        }),
      },
      "7xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl7Scale,
          weight: 900,
        }),
      },
      "8xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl8Scale,
          weight: 900,
        }),
      },
      "9xl": {
        thin: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 100,
        }),
        xlight: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 200,
        }),
        light: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 300,
        }),
        normal: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 400,
        }),
        medium: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 500,
        }),
        semibold: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 600,
        }),
        bold: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 700,
        }),
        xbold: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 800,
        }),
        black: FontBuilder({
          family: accentFont,
          scale: xl9Scale,
          weight: 900,
        }),
      },
    },
  };
};

export { TypographyFontsBuilder };
