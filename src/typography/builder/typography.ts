import {
  TypographyConfigI,
  TypographyI,
} from "@/typography/contracts/typography";
import { TypographyResourcesBuilder } from "@/typography/builder/resource";
import { TypographyFontsBuilder } from "@/typography/builder/fonts";

const TypographyBuilder = ({
  base,
  config,
}: {
  base: TypographyI;
  config: TypographyConfigI;
}): TypographyI => {
  return {
    external_resources: config?.external_resources
      ? TypographyResourcesBuilder({
          base: base.external_resources,
          config: config?.external_resources ?? [],
        })
      : base.external_resources,
    fonts: config?.fonts
      ? TypographyFontsBuilder({
          base: base.fonts,
          config: config?.fonts ? config.fonts : {},
        })
      : base.fonts,
  };
};

export { TypographyBuilder };
