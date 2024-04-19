import { ColorsConfigI, ColorsI } from "../contracts/colors";
import { ColorVariantBuilder } from "./variant";
import { AdditionalColorBuilder } from "./additional";

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
    primary: ColorVariantBuilder({
      base: base.primary,
      config: config.primary ? config.primary : {},
    }),
    accent: ColorVariantBuilder({
      base: base.accent,
      config: config.accent ? config.accent : {},
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
