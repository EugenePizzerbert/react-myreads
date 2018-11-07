import React from "react";
import Mobile from "../components/Header/Mobile";
import Vertical from "../components/Header/Vertical";

const Header = props => {
  return (
    <React.Fragment>
      <Mobile {...props} />
      <Vertical {...props} />
    </React.Fragment>
  );
};

export default Header;
