export interface width {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
}

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
