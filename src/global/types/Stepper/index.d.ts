import { directions } from "components/Stepper";
import { TailwindColorsType } from "../..";

export interface Step {
  name: string;
  active: boolean;
}

export type DirectionsType = {
  col: string;
  row: string;
};

export type SizesType = {
  responsive: DirectionsType;
  xxl: DirectionsType;
  xl: DirectionsType;
  lg: DirectionsType;
  md: DirectionsType;
  sm: DirectionsType;
  xs: DirectionsType;
};

export type textDirectionsType = {
  col: { left: string; right: string };
  row: { top: string; bottom: string };
};

export type checkedType = {
  true: true;
  false: false;
};

export type animatedType = {
  true: true;
  false: false;
};

export interface StepperProps {
  steps: Step[];
  animated?: animatedType[keyof animatedType];
  textColor?: TailwindColorsType;
  disabledColor?: TailwindColorsType;
  activeColor?: TailwindColorsType;
  checked?: checkedType[keyof checkedType];
  size?: SizesType[keyof SizesType][keyof SizesType[keyof SizesType]];
  direction?: directions;
  textDirection?:
    | textDirectionsType["col"]["left" | "right"]
    | textDirectionsType["row"]["top" | "bottom"];
}

export interface StepIndexProps {
  $disabled: boolean;
}
