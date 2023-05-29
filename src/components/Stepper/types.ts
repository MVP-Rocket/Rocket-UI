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

export enum directions {
  row, // flex-row
  col, // flex-col
}

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
