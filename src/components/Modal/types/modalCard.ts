import { width } from "./cardSize";

export interface modalCard {
  children: any;
  props?: any;
  width?: width[keyof width];
  noPadding?: boolean;
}
