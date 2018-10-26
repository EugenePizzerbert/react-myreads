import React, { Component } from "react";
import "./App.css";
import MyReadsContainer from "./MyReadsContainer";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-page">
          <Header />
          <main className="container">
            <MyReadsContainer />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
