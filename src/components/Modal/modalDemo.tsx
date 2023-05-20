import React from "react";
import Modal from "./modal";
import ModalContent from "./modalContent";

export default function ModalDemo() {
  return (
    <div>
      <Modal open={true}>
        <ModalContent>
          <h1>omg</h1>
        </ModalContent>
      </Modal>
    </div>
  );
}
