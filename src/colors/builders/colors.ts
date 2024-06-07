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
    surfaces: ColorVariantBuilder({
      base: base.surfaces,
      config: config.surfaces ? config.surfaces : {},
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
    map: {
      label: {
        all: config.map?.label?.all ? config.map.label.all : base.map.label.all,
        water: config.map?.label?.water
          ? config.map.label.water
          : base.map.label.water,
        highway: config.map?.label?.highway
          ? config.map.label.highway
          : base.map.label.highway,
        road: config.map?.label?.road
          ? config.map.label.road
          : base.map.label.road,
      },
      border: {
        country: config.map?.border?.country
          ? config.map.border.country
          : base.map.border.country,
        highway: config.map?.border?.highway
          ? config.map.border.highway
          : base.map.border.highway,
        road: config.map?.border?.road
          ? config.map.border.road
          : base.map.border.road,
      },
      landscape: {
        all: config.map?.landscape?.all
          ? config.map.landscape.all
          : base.map.landscape.all,
        artificial: config.map?.landscape?.artificial
          ? config.map.landscape.artificial
          : base.map.landscape.artificial,
        terrain: config.map?.landscape?.terrain
          ? config.map.landscape.terrain
          : base.map.landscape.terrain,
        park: config.map?.landscape?.park
          ? config.map.landscape.park
          : base.map.landscape.park,
        poi: config.map?.landscape?.poi
          ? config.map.landscape.poi
          : base.map.landscape.poi,
        water: config.map?.landscape?.water
          ? config.map.landscape.water
          : base.map.landscape.water,
        transit: config.map?.landscape?.transit
          ? config.map.landscape.transit
          : base.map.landscape.transit,
        highway: config.map?.landscape?.highway
          ? config.map.landscape.highway
          : base.map.landscape.highway,
        road: config.map?.landscape?.road
          ? config.map.landscape.road
          : base.map.landscape.road,
      },
    },
    additional: AdditionalColorBuilder({
      base: base.additional,
      config: config?.additional ? config.additional : [],
    }),
  };
};

export { ColorBuilder };
