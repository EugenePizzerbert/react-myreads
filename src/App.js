import React, { Component } from "react";
import "./App.css";
import MyReadsContainer from "./MyReadsContainer";
import Header from "./modules/Header";
import Footer from "./modules/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <MyReadsContainer />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
