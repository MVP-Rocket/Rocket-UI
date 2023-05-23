const tailwindColors = require("tailwindcss/colors");

type color = {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  950?: string;
};

export const colors = {
  primary: "#eab308",
  secondary: "#fde047",
  disabled: "#d4d4d8",
};

export function typedTailwindColors() {
  const colors: color[] = Object.values(tailwindColors);
  const typedColors = {};
  return colors.map((color: color) => {
    const depths = Object.values(color).map((depth, i) => {
      return typeof depth;
    });
    return { color: { ...depths } };
  });
}
