import { height, width } from "./size";

export interface search {
  onChange: (value?: any) => void;
  onEndSearch?: (value?: any) => void;
  height?: height[keyof height];
  width?: width[keyof width];
  placeholder?: string;
  iconPosition?: string;
  iconRight?: boolean;
  iconBorder?: boolean;
  results?: any;
}
