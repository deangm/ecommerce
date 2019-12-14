import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import ProductsPage from './components/ProductsPage'
import store from './store'


import { createStore } from 'redux'



  ;

class App extends React.Component {

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products").then(
      (res) => {console.log(res);}
    )
  }

  render() {

    return (
      <ProductsPage />
    );
  }


}

export default App;
