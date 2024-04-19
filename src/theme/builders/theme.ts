import { AlternateBuilder } from "../../alternate/builders/alternate";
import { ThemeConfigI, ThemeI } from "../contracts/theme";
import { TypographyBuilder } from "../../typography/builder/typography";
import { ColorBuilder } from "../../colors/builders/colors";
import { RadiusBuilder } from "../../radius/builders/radius";
import { BaseTheme } from "../../base/theme";

const ThemeBuilder = ({
  config,
} : {
  config: ThemeConfigI;
}): ThemeI => {
  return {
    alternate: AlternateBuilder({
      base: BaseTheme.alternate,
      config: config?.alternate ? config.alternate : [],
    }),
    typography: config?.typography
      ? TypographyBuilder({
          base: BaseTheme.typography,
          config: {
            resources: config.typography?.resources
              ? config.typography.resources
              : [],
            fonts: config.typography?.fonts ? config.typography.fonts : {},
          },
        })
      : BaseTheme.typography,
    colors: config?.colors
      ? ColorBuilder({
          base: BaseTheme.colors,
          config: config.colors ? config.colors : {},
        })
      : BaseTheme.colors,
    utility: BaseTheme.utility,
    radius: RadiusBuilder({
      base: BaseTheme.radius,
      config: config.radius,
    }),
  };
};

export { ThemeBuilder };
