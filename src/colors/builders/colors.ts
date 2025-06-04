import {
  AllColorsI,
  ColorsConfigI,
  ColorsI,
  ScopeColorsI,
} from "@/colors/contracts/colors";
import { ColorVariantBuilder } from "@/colors/builders/variant";

const ColorBuilder = ({
  base,
  config,
}: {
  base: ColorsI;
  config: ColorsConfigI;
}): ColorsI => {
  const scopedConfig = config.scoped ?? {};

  const semanticColors = {
    danger: ColorVariantBuilder({
      base: base.danger,
      config: config.danger ? config.danger : {},
    }),
    warning: ColorVariantBuilder({
      base: base.warning,
      config: config.warning ? config.warning : {},
    }),
    success: ColorVariantBuilder({
      base: base.success,
      config: config.success ? config.success : {},
    }),
    info: ColorVariantBuilder({
      base: base.info,
      config: config.info ? config.info : {},
    }),
  };

  const neutralColors = {
    neutrals: ColorVariantBuilder({
      base: base.neutrals,
      config: config.neutrals ? config.neutrals : {},
    }),
  };

  const scoped = Object.entries(scopedConfig).reduce(
    (acc, [key, value]) => {
      acc[key] = {
        // Add semantic colors
        danger: ColorVariantBuilder({
          base: base.danger,
          config: config.danger ? config.danger : {},
        }),
        warning: ColorVariantBuilder({
          base: base.warning,
          config: config.warning ? config.warning : {},
        }),
        success: ColorVariantBuilder({
          base: base.success,
          config: config.success ? config.success : {},
        }),
        info: ColorVariantBuilder({
          base: base.info,
          config: config.info ? config.info : {},
        }),
        // Add neutrals
        neutrals: ColorVariantBuilder({
          base: base.neutrals,
          config: config.neutrals ? config.neutrals : {},
        }),
        // Add utility colors
        border: ColorVariantBuilder({
          base: base.border,
          config: value.border ?? (config.border ? config.border : {}),
        }),
        text: ColorVariantBuilder({
          base: base.text,
          config: value.text ?? (config.text ? config.text : {}),
        }),
        surfaces: ColorVariantBuilder({
          base: base.surfaces,
          config: value.surfaces ?? (config.surfaces ? config.surfaces : {}),
        }),
        skeletons: ColorVariantBuilder({
          base: base.skeletons,
          config: value.skeletons ?? (config.skeletons ? config.skeletons : {}),
        }),
        // Add branding colors
        primary: ColorVariantBuilder({
          base: base.primary,
          config: value.primary ?? (config.primary ? config.primary : {}),
        }),
        accent: ColorVariantBuilder({
          base: base.accent,
          config: value.accent ?? (config.accent ? config.accent : {}),
        }),
        accent2: ColorVariantBuilder({
          base: base.accent2,
          config:
            value.accent2 ??
            value.accent ??
            (config.accent2
              ? config.accent2
              : config.accent
                ? config.accent
                : {}),
        }),
        accent3: ColorVariantBuilder({
          base: base.accent3,
          config:
            value.accent3 ??
            value.accent ??
            (config.accent3
              ? config.accent3
              : config.accent
                ? config.accent
                : {}),
        }),
        accent4: ColorVariantBuilder({
          base: base.accent4,
          config:
            value.accent4 ??
            value.accent ??
            (config.accent4
              ? config.accent4
              : config.accent
                ? config.accent
                : {}),
        }),
        accent5: ColorVariantBuilder({
          base: base.accent5,
          config:
            value.accent5 ??
            value.accent ??
            (config.accent5
              ? config.accent5
              : config.accent
                ? config.accent
                : {}),
        }),
        supporting: ColorVariantBuilder({
          base: base.supporting,
          config:
            value.supporting ?? (config.supporting ? config.supporting : {}),
        }),
      };
      return acc;
    },
    {} as Record<string, AllColorsI>,
  );

  return {
    ...semanticColors,
    ...neutralColors,
    border: ColorVariantBuilder({
      base: base.surfaces, // Fallback to surfaces for borders
      config: config.border ? config.border : {},
    }),
    text: ColorVariantBuilder({
      base: base.neutrals, // Fallback to neutrals for text
      config: config.text ? config.text : {},
    }),
    surfaces: ColorVariantBuilder({
      base: base.surfaces,
      config: config.surfaces ? config.surfaces : {},
    }),
    skeletons: ColorVariantBuilder({
      base: base.skeletons,
      config: config.skeletons ? config.skeletons : {},
    }),
    primary: ColorVariantBuilder({
      base: base.primary,
      config: config.primary ? config.primary : {},
    }),
    accent: ColorVariantBuilder({
      base: base.accent,
      config: config.accent ? config.accent : {},
    }),
    accent2: ColorVariantBuilder({
      base: base.accent2,
      config: config.accent2
        ? config.accent2
        : config.accent
          ? config.accent
          : {},
    }),
    accent3: ColorVariantBuilder({
      base: base.accent3,
      config: config.accent3
        ? config.accent3
        : config.accent
          ? config.accent
          : {},
    }),
    accent4: ColorVariantBuilder({
      base: base.accent4,
      config: config.accent4
        ? config.accent4
        : config.accent
          ? config.accent
          : {},
    }),
    accent5: ColorVariantBuilder({
      base: base.accent5,
      config: config.accent5
        ? config.accent5
        : config.accent
          ? config.accent
          : {},
    }),
    supporting: ColorVariantBuilder({
      base: base.supporting,
      config: config.supporting ? config.supporting : {},
    }),
    scoped,
  };
};

export { ColorBuilder };
