import { ReactNode } from "react";

export interface select {
  value?: string;
  onChange?: any;
  height?: height[keyof height];
  width?: width[keyof width];
  placeholder?: string;
  noBorder?: boolean;
}

export interface selectOptions {
  children: string[];
  hoverColor?: string;
  props?: any;
  disconnected?: boolean;
}

export interface height {
  lg: string;
  md: string;
  sm: string;
}

export interface width {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
}
