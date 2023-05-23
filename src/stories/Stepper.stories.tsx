import React from "react";

import {
  Step,
  Stepper,
  StepperProps,
  directions,
  sizes,
  textDirections,
} from "../components/Stepper";

export default {
  component: Stepper,
};

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

export const StepperStoryChangeTest = () => {
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
        textColor="black"
        activeColor="red"
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
};

export const StepperStory = {
  render: () => <Stepper animated={true} size="lg" steps={datas} />,
};
