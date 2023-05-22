import { ReactNode } from "react";

export interface transitionType {
  children: ReactNode;
  isShowing?: boolean;
  start: string;
  end: string;
  duration: string;
  timing?: string;
  props?: any;
}
