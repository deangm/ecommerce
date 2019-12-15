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



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products").then(
      (res) => { return res.json() }
    ).then((response) => {
      response.forEach((p) => {
        store.dispatch({
          type: "ADD_PRODUCT",
          product: p
        }) 
      })
      this.setState({
        loading: false
      })
    })
  }

  render() {
    if(!this.state.loading){
      console.log(store.getState().products)
      return (
          <ProductsPage products = {store.getState().products} />
        )
    }
    return (
      <div>Loading</div>
    );
  }
C

}

export default App;
