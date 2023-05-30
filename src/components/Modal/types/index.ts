import { width } from "../../../global/types";

export interface modal {
  isOpen?: boolean;
  onClose?: any;
  noBackdrop?: boolean;
  backdropOpacity?: number;
}

export interface modalCard {
  props?: any;
  width?: width;
  noPadding?: boolean;
}
