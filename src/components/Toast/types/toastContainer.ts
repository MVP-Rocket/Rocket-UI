export const positions: positions = {
  topLeft: "top-4 left-0",
  topRight: "top-4 right-0",
  bottomLeft: "bottom-4 left-0",
  bottomRight: "bottom-4 right-0",
};

export interface positions {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
}

export interface toastContainer {
  position?: positions[keyof positions];
}
