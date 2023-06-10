import { TailwindColorsType } from "../../../global";
import { height, width } from "../../../global/types";

export interface search {
  onChange: (value?: any) => void;
  onEndSearch?: (value?: any) => void;
  clickOnResult?: (value?: any) => void;
  height?: height[keyof height];
  width?: width[keyof width];
  placeholder?: string;
  hoverColor?: TailwindColorsType;
  iconPosition?: string;
  iconRight?: boolean;
  iconBorder?: boolean;
  results?: any;
  maxResult?: number;
}
