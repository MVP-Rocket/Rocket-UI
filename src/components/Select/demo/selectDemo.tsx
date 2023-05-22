import React, { useState } from "react";
import Select from "../select";
import Transition from "../../Transition/transition";

export default function SelectDemo() {
  const options = ["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook"];
  const [chosenOption, setChosenOption] = useState<string>(options[0]);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col">
        <Select value={chosenOption} onChange={setChosenOption}>
          <Transition
            start="invisible opacity-0"
            end="visible opacity-100"
            duration="400ms"
          >
            <Select.Options>{options}</Select.Options>
          </Transition>
        </Select>
        <p className="mt-2 ml-1">Option choisie: {chosenOption}</p>
      </div>
    </div>
  );
}
