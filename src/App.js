import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import ProductsPage from './components/ProductsPage'
import Cart from './components/Cart'
import Login from './components/Login'
import store from './store'
import { createStore } from 'redux'



class App extends React.Component {
  constructor(props) {
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
    if (!this.state.loading) {
      return (
        <div>
        <Router>
          <Link to ="/Login">
            Login
          </Link>
          <Link to="/ProductsPage">
            Products
          </Link>
          <Link to ="/Cart">
            Cart
          </Link>
  
        <Switch>
          <Route path ="/Login" component = {Login} />
         <Route path="/ProductsPage" render={() => (<ProductsPage products = {store.getState().products}/>)} />
         <Route path ="/Cart" component = {Cart}/>
        </Switch>
        </Router>
       
        </div>

    
        )
    }
    else{
      return (
        <div>Loading</div>
      );
    }
   
  }
}

export default App;
