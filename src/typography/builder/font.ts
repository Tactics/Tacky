const FontBuilder = ({
  family,
  scale,
}: {
  family: string;
  scale: string;
}): string => {
  return scale + " " + family;
};

export { FontBuilder };
