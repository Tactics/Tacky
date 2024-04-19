export const TypographyResourcesBuilder = ({
  base,
  config,
}: {
  base: string[];
  config: string[];
}): string[] => {
  return config ? config : base;
};
