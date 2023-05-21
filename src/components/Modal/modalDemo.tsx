import React from "react";
import Modal from "./modal";

export default function ModalDemo({ isOpen, height, width }: any) {
  return (
    <>
      <Modal isOpen={isOpen} height={height} width={width}>
        <h1>omg</h1>
      </Modal>
    </>
  );
}
