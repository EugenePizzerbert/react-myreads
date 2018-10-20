import React, { Component } from "react";
import "./App.css";
import MyReadsContainer from "./MyReadsContainer";
import Header from "./modules/Header";
import Footer from "./modules/Footer";

class App extends Component {
  handleSearch = () => {
    console.log('handleSearch', 'Display Search')
  };
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="container">
                    <MyReadsContainer searchButton={this.handleSearch}/>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
