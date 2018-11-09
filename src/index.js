import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/utilities/offsets.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

library.add(fas, far, fab);

ReactDOM.render(
  <Router basename="/react-myreads">
    <Route children={({ match, ...props }) => <App {...props} />} />
  </Router>,
  document.getElementById("root")
);
