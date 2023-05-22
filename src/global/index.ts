const tailwindColors: ColorDepth[] = require("tailwindcss/colors");

interface ColorDepth {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export const colors = {
  primary: "#eab308",
  secondary: "#fde047",
  disabled: "#d4d4d8",
};

export const getBgColors = () => {
  return Object.entries(tailwindColors)
    .map((color: [string, ColorDepth]) => {
      return Object.values(color[1]).map((nb) => {
        return `bg-${color[0]}-${nb}`;
      });
    })
    .flat();
};
