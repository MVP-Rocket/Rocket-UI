import React from "react";

interface transitionProps {
  children: any;
  isShowing: boolean;
  start: string;
  end: string;
}

export default function Transition({
  children,
  isShowing,
  start,
  end,
}: transitionProps) {
  return (
    <div
      className={`${
        isShowing ? end : start
      } transition-all duration-300 absolute z-1`}
    >
      {children}
    </div>
  );
}
