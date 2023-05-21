import React from "react";
import ModalDemo from "../components/Modal/modalDemo";

export default {
  component: ModalDemo,
};

export const Modal = {
  render: () => <ModalDemo isOpen={true} height="500px" width="600px" />,
};
