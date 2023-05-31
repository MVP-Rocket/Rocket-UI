import { width } from "../../../global/types";

export interface modal {
  isOpen: boolean;
  onClose?: any;
  noBackdrop?: boolean;
  backdropOpacity?: number;
}

export interface modalCard {
  onClose?: () => void;
  width?: width[keyof width];
  noPadding?: boolean;
}
