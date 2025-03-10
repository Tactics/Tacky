import { ColorsConfigI, ColorsI } from "@/colors/contracts/colors";
import { ColorVariantBuilder } from "@/colors/builders/variant";
import { AdditionalColorBuilder } from "@/colors/builders/additional";

const ColorBuilder = ({
  base,
  config,
}: {
  base: ColorsI;
  config: ColorsConfigI;
}): ColorsI => {
  return {
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
    neutrals: ColorVariantBuilder({
      base: base.neutrals,
      config: config.neutrals ? config.neutrals : {},
    }),
    border: ColorVariantBuilder({
      base: base.neutrals,
      config: config.border ? config.border : {},
    }),
    text: ColorVariantBuilder({
      base: base.neutrals,
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
    additional: AdditionalColorBuilder({
      base: base.additional,
      config: config?.additional ? config.additional : [],
    }),
  };
};

export { ColorBuilder };
