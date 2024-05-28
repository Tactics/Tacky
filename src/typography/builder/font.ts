const FontBuilder = ({
  family,
  scale,
  weight,
}: {
  family: string;
  scale: string;
  weight: number;
}): string => {
  return weight + " " + scale + " " + family;
};

export { FontBuilder };
