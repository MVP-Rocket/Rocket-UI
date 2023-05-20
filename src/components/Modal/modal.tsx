import React from "react";

interface indexProps {
  height?: string;
  width?: string;
  open?: boolean;
  onClose?: any;
  children?: any;
}

export default function Modal({
  height,
  width,
  open,
  onClose,
  children,
}: indexProps) {
  console.log("open", open);
  console.log("child", children);
  return <div>index</div>;
}
