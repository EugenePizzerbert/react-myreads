import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavButtonBack from "./NavButtonBack";
import SocialLinks from "../SocialLinks";

const Vertical = props => {
  const { isLanding } = props;

  //dynamic menu background
  let menuBackground = null;
  if (!isLanding) {
    menuBackground = <div className="brk-header__main-bar-bg opacity-90" />;
  }
  return (
    <header className="brk-header brk-header_vertical brk-header_style-2 brk-header_color-white brk-header_skin-2 position-fixed">
      <div
        className="brk-header__main-bar brk-header_border-bottom-20"
        style={{ height: "70px" }}
      >
        {menuBackground}
        <div className="row justify-content-lg-between flex-lg-row-reverse">
          <div className="col-lg-auto d-lg-flex flex-lg-row-reverse">
            <div className="brk-info-menu-open brk-header_border-bottom-20 brk-header__item text-center d-flex justify-content-center align-items-center">
              <Link to="/" className="nav-home-link">
                <FontAwesomeIcon
                  icon="home"
                  className="text-white font__size-28"
                />
              </Link>
            </div>
            
          </div>
          <div className="col-lg-auto">
            <div className="brk-header-popup-menu">
              <div className="brk-header-popup-menu__open-close font__family-montserrat font__weight-light font__size-14 letter-spacing-40">
                <a
                  to="https://github.com/eddielee394/react-myreads"
                  className="menu-link text-white"
                >
                  <FontAwesomeIcon icon="bars" /> Source Code
                </a>
              </div>
              <div className="brk-header-popup-menu__menu text-lg-center font__family-roboto font__weight-thin">
                <ul>
                  <li>
                    <a href="javascript:void(0)">Portfolio</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">About</a>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">About 1</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">About 2</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">About 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-auto d-lg-flex flex-lg-row-reverse">
            <div className="brk-header__title font__family-montserrat font__weight-bold">
              Info
            </div>
            <div className="brk-social-links brk-social-links_no-open brk-header_border-right-20 brk-social-links_link-14 brk-header__item">
              <SocialLinks />
            </div>
            <div className="brk-totop brk-header_border-top-20">
              <NavButtonBack />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Vertical;
