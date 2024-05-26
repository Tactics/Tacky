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
    resources: config?.resources
      ? TypographyResourcesBuilder({
          base: base.resources,
          config: config?.resources ?? [],
        })
      : base.resources,
    fonts: config?.fonts
      ? TypographyFontsBuilder({
          base: base.fonts,
          config: config?.fonts ? config.fonts : {},
        })
      : base.fonts,
  };
};

export { TypographyBuilder };
