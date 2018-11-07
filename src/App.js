import React, { Component } from "react";
import "./App.css";
import BookCase from "./modules/BookCase";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import { Slide, ToastContainer } from "react-toastify";
import { Route } from "react-router-dom";
import Landing from "./modules/Landing";

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <main className="main-container">
          <Header />
          <BookCase />
          <Footer />
          <ToastContainer
            transition={Slide}
            newestOnTop={true}
            // hideProgressBar={true}
            // autoClose={false}
          />
        </main>
      </div>
    );
  }
}

export default App;
