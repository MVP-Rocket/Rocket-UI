import { ReactNode } from "react";
import { height, width } from "../../../global/types";

export interface select {
  value?: string;
  onChange?: any;
  height?: height[keyof height];
  width?: width[keyof width];
  placeholder?: string;
  noBorder?: boolean;
}

export interface selectOptions {
  hoverColor?: string;
  props?: any;
  disconnected?: boolean;
}
