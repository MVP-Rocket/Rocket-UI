import React from "react";
import { transitionType } from "./types/transitionType";

export default function Transition({
  children,
  isShowing,
  start,
  end,
  duration,
  timing,
}: transitionType) {
  return (
    <div
      className={`${isShowing ? end : start} transition-all absolute z-1`}
      style={{ transitionDuration: duration, transitionTimingFunction: timing }}
    >
      {children}
    </div>
  );
}
