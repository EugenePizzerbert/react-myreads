import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavButtonBack = ({ history }) => {
  return (
    <span className="back-btn" onClick={history.goBack}>
      <FontAwesomeIcon icon={["fas", "arrow-left"]} />
    </span>
  );
};

export default withRouter(NavButtonBack);
