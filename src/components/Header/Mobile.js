import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images
import imgLogo from "../../assets/img/logo.png";
import imgLogoDark from "../../assets/img/logo-dark.png";

const Mobile = props => {
  const { isLanding } = props;

  //dynamic menu background
  let menuBackground = null;
  if (!isLanding) {
    menuBackground = <div className="brk-header__mobile-bar-bg opacity-90" />;
  }
  return (
    <div className="brk-header-mobile d-flex align-items-center d-lg-none mx-0">
      <div className="col-2 col-md-1">
        <Link to="/" className="nav-home-link">
          <FontAwesomeIcon icon="home" className="text-white font__size-28" />
        </Link>
      </div>
      <div className="col-8 col-md-10">
        <div className="brk-header-mobile__logo">
          <Link to="/">
            <img
              className="brk-header-mobile__logo-1"
              src={imgLogo}
              alt="alt"
            />
            <img
              className="brk-header-mobile__logo-2"
              src={imgLogoDark}
              alt="alt"
            />
          </Link>
        </div>
      </div>
      <div className="col-2 col-md-1">
        <Link to="search" className="nav-search-link">
          <FontAwesomeIcon icon="search" className="text-white font__size-28" />
        </Link>
      </div>
      {menuBackground}
    </div>
  );
};

export default Mobile;
