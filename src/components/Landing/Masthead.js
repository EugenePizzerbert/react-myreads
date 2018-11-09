import React from "react";
import "../../assets/css/styles.css";
//image imports
import imgDelimiterPhone from "../../assets/img/delimiter-phone.png";
import Link from "react-router-dom/es/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Masthead = () => {
  return (
    <div className="masthead-container py-5">
      <div className="container">
        <div className="row row-no-gutter justify-content-center">
          <div className="col-12 col-lg-6 all-light text-center text-lg-left">
            <h4 className="font__family-montserrat mt-30 mt-lg-60 font__size-28 line__height-32 text-uppercase highlight-underline">
              <span
                className="before wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              />
              Get Yo Read On!!!!
            </h4>
            <p className="font__family-opensans font__size-16 line__height-26 mt-20">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean c
              ommodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
            <p className="font__family-opensans font__size-16 line__height-26 mt-30">
              Nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla vel, aliquet nec
            </p>
            <div className="mt-20 text-center text-center text-lg-left mb-20">
              <Link
                to="bookcase"
                className="btn btn-lg border-radius-25 font__family-open-sans font__weight-bold btn-prime mh-0"
              >
                <span className="before" />
                My Books <span className="after" />
                <FontAwesomeIcon icon={["fas", "book"]} className="ml-1 pt-1" />
                <span className="border-btn" />
              </Link>
              <Link
                to="search"
                className="btn btn-lg bg-white btn-circle border-radius-50 font__family-open-sans font__weight-bold"
              >
                <span className="before" />
                Search Books
                <FontAwesomeIcon
                  icon={["fas", "search"]}
                  className="ml-1 pt-1 text-primary"
                />
                <span className="border-btn" />
              </Link>
            </div>
          </div>

          <div className="col-md-1 col-lg-2 d-none d-lg-flex" />
          <div className="col-md-5 col-lg-4">
            <div className="text-center">
              <img src={imgDelimiterPhone} className="iphone-image" alt="alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
