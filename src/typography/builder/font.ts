const FontBuilder = ({
  family,
  scale,
  weight,
}: {
  family: string;
  scale: string;
  weight: number;
}): string => {
  return scale + " " + family + " " + weight;
};

export { FontBuilder };
