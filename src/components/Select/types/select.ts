import { ReactNode } from "react";
import { selectHeight, selectWidth } from "./size";

export interface select {
  children: ReactNode;
  value?: string;
  onChange?: any;
  height?: selectHeight[keyof selectHeight];
  width?: selectWidth[keyof selectWidth];
  placeholder?: string;
  noBorder?: boolean;
}
