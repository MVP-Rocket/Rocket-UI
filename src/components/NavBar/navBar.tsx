import React, { useState } from "react";
import { navBar } from "./types/navBar";
import { GrSearch } from "react-icons/gr";
import SearchModal from "./modal/searchModal";

export default function NavBar({ appLogo, profileImg }: navBar) {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-0 h-16 w-screen bg-gray-900 text-white">
        <div className="h-full flex items-center px-10">
          <img src={appLogo} className="h-9" alt="app_logo" />
          <div className="flex justify-end items-center w-full ">
            <form>
              <div
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center rounded-md h-9 w-60 mr-6 pl-2.5 cursor-pointer bg-white shadow-select"
              >
                <GrSearch size={20} />
                <p className="text-gray-400 mb-1 pl-3">Rechercher</p>
              </div>
            </form>
            <img
              src={profileImg}
              className="h-9 rounded-full"
              alt="profile_img"
            />
          </div>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </>
  );
}
