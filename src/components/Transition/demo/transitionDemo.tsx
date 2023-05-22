import React, { useState } from "react";
import Transition from "../transition";
import Modal from "../../Modal/modal";

export default function TransitionDemo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Transition
          isShowing={isOpen}
          start="opacity-0 scale-50"
          end="opacity-100 scale-100"
          duration="200ms"
          timing="ease-out"
        >
          <Modal.Card height="200px" width="400px">
            <Modal.Title>Rocket UI - Modal</Modal.Title>
            <Modal.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Modal.Text>
            <Modal.CloseBtn onClick={() => setIsOpen(false)}>
              Close modal
            </Modal.CloseBtn>
          </Modal.Card>
        </Transition>
      </Modal>

      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer p-2 bg-gray-950 text-white rounded-lg"
      >
        Open modal with transition
      </button>
    </>
  );
}
