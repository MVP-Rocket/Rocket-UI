import React from "react";

interface transitionProps {
  children: any;
  isShowing: boolean;
  start: string;
  end: string;
  duration: string;
  timing?: string;
}

export default function Transition({
  children,
  isShowing,
  start,
  end,
  duration,
  timing,
}: transitionProps) {
  return (
    <div
      className={`${isShowing ? end : start} transition-all absolute z-1`}
      style={{ transitionDuration: duration, transitionTimingFunction: timing }}
    >
      {children}
    </div>
  );
}
