import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import ProductsPage from './components/ProductsPage'
import ProductInfo from './components/ProductInfo'
import CreateAccount from './components/CreateAccount'
import Cart from './components/Cart'
import Login from './components/Login'
import store from './store'
import { saveToLocal, loadLocal } from './helper'




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
    store.subscribe(() => this.forceUpdate());
    store.subscribe(() => saveToLocal(store.getState()))
  }

  handleLogOut = () => {
    store.dispatch({
      type: "LOGOUT"
    })
  }
  render() {
    if (!this.state.loading) {
      return (
        <>
        <Router>
          <nav className="navbar navbar-expand-lg">
            <Link onClick = {this.handleLogOut} className="navbar-brand" to="/">{store.getState().loggedIn.activeUser ?  `Log Out: ${store.getState().loggedIn.activeUser}` : "Not Logged In"} </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">A</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ProductsPage">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/ProductsPage"
              render={() => (<ProductsPage products={store.getState().products} />)} />
            <Route path="/Cart"
              render={() => (<Cart products={store.getState().cart} />)} />
            <Route path="/product/:id" component={ProductInfo} />
            <Route path = "/CreateAccount" component={CreateAccount}/>
          </Switch>
        </Router >
       </>

      )
    }
    else {
      return (
        <div>Loading</div>
      );
    }

  }
}

export default App;
