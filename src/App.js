import React, { Component } from "react";
import "./App.css";
import BookCase from "./modules/BookCase";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-page">
          <Header />
          <BookCase />
          <Footer />
          <ToastContainer
            transition={Slide}
            newestOnTop={true}
            // hideProgressBar={true}
            // autoClose={false}
          />
        </div>
      </Router>
    );
  }
}

export default App;
