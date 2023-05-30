import React, { Children, cloneElement } from "react";
import { transition } from "./types";

export default function Transition({
  children,
  isShowing,
  start,
  end,
  duration,
  timing,
  props,
}: React.PropsWithChildren<transition>) {
  const transitionStyle = {
    transitionDuration: duration,
    transitionTimingFunction: timing,
  };

  const transitionClassName = `${
    props?.isOpen || isShowing ? end : start
  } transition-all h-screen w-screen`;

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
