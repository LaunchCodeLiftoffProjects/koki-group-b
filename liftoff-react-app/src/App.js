import "./App.css";
import React, { Component } from "react";
import API from "./data";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Confirm from "./components/Confirm";
import Banner from "./components/Banner";
// import Cart from "./components/Cart";
// import data from "./data";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
// import axios from "axios";
// import { useState, useEffect } from "react";


class App extends React.Component {
  state = {
    visible: true,
    cartItems: null,
    test: "Message",
  };


  handleCallback = (childData) => {
    this.setState({cartItems: childData})
  }

  render() {

    return (

          <div className="App">
            <Router>
              <Banner message="Hello World!" />
              <Route exact path="/" render = {(props) => <API appCallback = {this.handleCallback}  />}
              />
              <Route path="/Confirm" render = {(props) => <Confirm cartItems = {this.state.cartItems} />} />
            </Router>
            <Footer />
          </div>

    );
  }
}

export default App;

