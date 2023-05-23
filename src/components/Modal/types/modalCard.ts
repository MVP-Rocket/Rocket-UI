import { width } from "./cardSize";

export interface modalCard {
  children: any;
  width?: width[keyof width];
  noPadding?: boolean;
}
