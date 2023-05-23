import React from "react";
import NavBar from "../navBar";
import { navBarType } from "../types/navBarType";

export default function NavBarDemo({ appLogo, profileImg }: navBarType) {
  return (
    <div>
      <NavBar appLogo={appLogo} profileImg={profileImg} />
    </div>
  );
}
