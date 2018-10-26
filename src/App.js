import React, { Component } from "react";
import "./App.css";
import BookCase from "./modules/BookCase";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import SearchOverlay from "./modules/SearchOverlay";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-page">
          <Header />
          <main className="container my-reads-container">
            <Route exact path="/search" component={SearchOverlay} />
            <Route exact path="/" component={BookCase} />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
