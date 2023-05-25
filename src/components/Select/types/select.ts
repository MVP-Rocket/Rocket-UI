import { ReactNode } from "react";
import { height, width } from "./size";

export interface select {
  children: ReactNode;
  value?: string;
  onChange?: any;
  height?: height[keyof height];
  width?: width[keyof width];
  placeholder?: string;
  noBorder?: boolean;
}
