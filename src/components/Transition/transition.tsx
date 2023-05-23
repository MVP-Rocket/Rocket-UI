import React, { Children, cloneElement } from "react";
import { transition } from "./types/transition";

export default function Transition({
  children,
  isShowing,
  start,
  end,
  duration,
  timing,
  props,
}: transition) {
  const transitionStyle = {
    transitionDuration: duration,
    transitionTimingFunction: timing,
  };
  const transitionClassName = `${
    props?.isOpen || isShowing ? end : start
  } transition-all`;

  return (
    <div className={transitionClassName} style={transitionStyle}>
      {Children.map(children, (child: any) => {
        return cloneElement(child, {
          props,
        });
      })}
    </div>
  );
}
