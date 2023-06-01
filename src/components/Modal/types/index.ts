import { ReactNode } from "react";
import { width } from "../../../global/types";

export interface modal {
  isOpen: boolean;
  onClose: () => void;
  noBackdrop?: boolean;
  backdropOpacity?: number;
}

export interface modalCard {
  props?: any;
  width?: width[keyof width];
  noPadding?: boolean;
  noAnimation?: boolean;
}
