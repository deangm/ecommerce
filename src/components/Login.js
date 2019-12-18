import React from 'react'
import { Redirect } from 'react-router-dom'
import store from '../store';
import ProductsPage from '../components/ProductsPage'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        store.subscribe(() => this.forceUpdate())
    }
    
    handleLogin = () => {
       store.dispatch({
           type: "LOGIN",
           username: this.state.username,
           password: this.state.password
       })
    }

    userNameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
  
        if(!store.getState().loggedIn.activeUser){
            return(
                <div>
                    <div>
                        <label>UserName:</label>
                        <input onChange = {this.userNameHandler} value = {this.state.username} placeholder={"username"}></input>
                        <label>Password</label>
                        <input onChange = {this.passwordHandler} value = {this.state.password} placeholder={"password"}></input>
                    </div>
                    <button onClick = {this.handleLogin}>Log In</button>
                </div>
             

            )
        }
        
        
        
        return (
            <Redirect to = "/ProductsPage" />
        )
    }
}
export default Login