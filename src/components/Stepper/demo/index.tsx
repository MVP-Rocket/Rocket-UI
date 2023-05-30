import React from "react";

import { directions } from "../types";
import colors from "tailwindcss/colors";
import { Stepper, sizes, textDirections } from "./..";

const datas = [
  {
    name: "Stepper-start",
    active: true,
  },
  {
    name: "Stepper-middle",
    active: false,
  },
  {
    name: "Stepper-end",
    active: false,
  },
  {
    name: "Stepper-bonus ULTIME",
    active: false,
  },
];

export default function StepperDemo() {
  const [steps, setSteps] = React.useState(datas);

  React.useEffect(() => {
    setTimeout(() => {
      setSteps(
        steps.map((step, i) => {
          if (i === 1) {
            return {
              name: step.name,
              active: true,
            };
          }
          return step;
        })
      );
    }, 3000);
  }, []);

  return (
    <div className="w-screen h-screen flex gap-10 p-32">
      <Stepper
        textColor={colors.blue[500]}
        activeColor={colors.blue[500]}
        size={sizes.responsive.row}
        direction={directions.row}
        textDirection={textDirections.row.top}
        animated={true}
        steps={steps}
      />
      <div className="w-full h-full bg-gray-800 p-10 rounded">
        <Stepper
          size="responsive"
          direction={directions.col}
          textDirection={textDirections.col.right}
          animated={false}
          steps={steps}
        />
      </div>
    </div>
  );
}
