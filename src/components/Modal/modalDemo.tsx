import React, { useState } from "react";
import Modal from "./modal";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="px-6 py-4">
          <Modal.Title>Rocket UI - Modal</Modal.Title>
          <Modal.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Modal.Text>
          <Modal.CloseBtn onClick={() => setIsOpen(false)}>
            Close modal
          </Modal.CloseBtn>
        </div>
      </Modal>

      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer p-2 bg-gray-950 text-white rounded-lg"
      >
        Open modal
      </button>
    </>
  );
}
