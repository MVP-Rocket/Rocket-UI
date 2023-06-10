import { TailwindColorsType } from "../..";

export interface options {
  type?: string;
  theme?: string;
  animation?: string;
  duration?: number;
  color?: TailwindColorsType;
}

export interface toast {
  message?: string;
  type?: string;
  theme?: string;
  animation?: string;
  duration?: number;
  color?: TailwindColorsType;
  position?: string;
}

export interface positionsTypes {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
}

export interface toastContainer {
  position?: positionsTypes[keyof positionsTypes];
}
