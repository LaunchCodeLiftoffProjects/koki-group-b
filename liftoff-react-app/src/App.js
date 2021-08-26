import './App.css';
import React, {Component} from 'react';
import API from "./data"
import data from "./data"
import Nav from './components/Nav'
import Main from './components/Main'
import Cart from './components/Cart'
import Footer from './components/Footer'

import axios from 'axios'
import { useState, useEffect } from 'react';


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <API />
        <Cart />
        <Footer />
      </div>
    );
  }
}


export default App;

