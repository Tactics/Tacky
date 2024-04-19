import { AlternateBuilder } from "../../alternate/builders/alternate";
import { ThemeConfigI, ThemeI } from "../contracts/theme";
import { TypographyBuilder } from "../../typography/builder/typography";
import { ColorBuilder } from "../../colors/builders/colors";
import { RadiusBuilder } from "../../radius/builders/radius";

const ThemeBuilder = ({
  base,  
  config,
} : {
  base: ThemeI,  
  config: ThemeConfigI;
}): ThemeI => {
  return {
    alternate: AlternateBuilder({
      base: base.alternate,
      config: config?.alternate ? config.alternate : [],
    }),
    typography: config?.typography
      ? TypographyBuilder({
          base: base.typography,
          config: {
            resources: config.typography?.resources
              ? config.typography.resources
              : [],
            fonts: config.typography?.fonts ? config.typography.fonts : {},
          },
        })
      : base.typography,
    colors: config?.colors
      ? ColorBuilder({
          base: base.colors,
          config: config.colors ? config.colors : {},
        })
      : base.colors,
    utility: base.utility,
    radius: RadiusBuilder({
      base: base.radius,
      config: config.radius,
    }),
  };
};

export { ThemeBuilder };
