export function Opacity(
  hex: string,
  a: number,
  backgroundColor = { r: 255, g: 255, b: 255 },
): string {
  // Remove hash if it exists
  hex = hex.replace(/^#/, "");

  // If shorthand (e.g., #fff), expand it to full format
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  // Convert to RGB
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  const { r: br, g: bg, b: bb } = backgroundColor;

  // Calculate non-transparent color
  const newR = Math.round(r * a + br * (1 - a));
  const newG = Math.round(g * a + bg * (1 - a));
  const newB = Math.round(b * a + bb * (1 - a));

  return `rgb(${newR}, ${newG}, ${newB})`;
}
