import React, { useState } from "react";
import Modal from "../../Modal/modal";
import { GrSearch } from "react-icons/gr";

export default function SearchModal({ isOpen, setIsOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="h-screen w-screen flex justify-center pt-28">
        <Modal.Card noPadding>
          <form>
            <div className="flex items-center rounded-md h-16 w-[450px] pl-5 bg-white shadow-select">
              <GrSearch size={28} />
              <input
                type="text"
                placeholder="Rechercher"
                className="text-black text-xl w-full h-full rounded-md placeholder:text-xl pb-1 ml-4 focus:outline-none"
              />
            </div>
          </form>
        </Modal.Card>
      </div>
    </Modal>
  );
}
