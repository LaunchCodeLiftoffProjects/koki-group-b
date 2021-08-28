import "./App.css";
import React, { Component } from "react";
import API from "./data";
import data from "./data";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Confirm from "./components/Confirm";
import Banner from "./components/Banner";

import axios from "axios";
import { useState, useEffect } from "react";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Banner message="Hello World!" />
          <Nav />
          <Route path="/" exact component={API} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Confirm" component={Confirm} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

