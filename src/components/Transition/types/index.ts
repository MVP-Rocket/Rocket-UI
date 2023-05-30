export const timings: timings = {
  easeLinear: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  linear: "linear",
  infinite: "infinite",
};

export interface timings {
  easeLinear: string;
  easeIn: string;
  easeOut: string;
  easeInOut: string;
  linear: string;
  infinite: string;
}

export interface transition {
  isShowing?: boolean;
  start: string;
  end: string;
  duration: string;
  timing?: timings[keyof timings];
  props?: any;
}
