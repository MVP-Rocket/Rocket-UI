import React from "react";
import NavBar from "../navBar";
import { navBar } from "../types/navBar";

export default function NavBarDemo({ appLogo, profileImg }: navBar) {
  return (
    <div>
      <NavBar appLogo={appLogo} profileImg={profileImg} />
    </div>
  );
}
