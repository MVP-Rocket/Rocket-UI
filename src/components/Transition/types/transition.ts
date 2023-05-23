import { ReactNode } from "react";
import { timings } from "./timing";

export interface transition {
  children: ReactNode;
  isShowing?: boolean;
  start: string;
  end: string;
  duration: string;
  timing?: timings[keyof timings];
  props?: any;
}
