export interface width {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
}

export interface height {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
}

// Import & Export all types here /!\

export type { options, toast, positionsTypes, toastContainer } from "./Toast";

export type { select, selectOptions } from "./Select";

export type {
  DirectionsType,
  SizesType,
  Step,
  StepperProps,
  StepIndexProps,
  textDirectionsType,
  checkedType,
  animatedType,
} from "./Stepper";

export type { search } from "./Search";

export type { modal, modalCard } from "./Modal";
