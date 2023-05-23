import React from "react";
import NavBarDemo from "../../components/NavBar/demo/navBarDemo";
import appLogo from "../assets/41xK+I3YBEL._UXNaN_FMjpg_QL85_.jpg";
import profileImg from "../assets/blank_profile_img.webp";

export default {
  component: NavBarDemo,
};

export const Default = {
  render: () => <NavBarDemo appLogo={appLogo} profileImg={profileImg} />,
};
