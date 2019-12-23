import React from 'react'
import { Redirect } from 'react-router-dom'
import store from '../store';
import { Link } from 'react-router-dom';


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

        if (!store.getState().loggedIn.activeUser) {
            return (







                <div className = "cont">
                    <div className = "subTitle">
                        Welcome Back!
                    </div>

                <div className = "loginCont">
                    <div className = "inputCont">
                        <label>UserName:</label>
                        <input onChange={this.userNameHandler} value={this.state.username} placeholder={"username"}></input>
                        <label>Password</label>
                        <input onChange={this.passwordHandler} value={this.state.password} placeholder={"password"}></input>
                    </div>
                    <button className = "btn btn-primary" onClick={this.handleLogin}>Log In</button>
                    <Link to = "/CreateAccount">
                        Create Account
                    </Link>
                </div>
                </div>


            )
        }



        return (
            <Redirect to="/ProductsPage" />
        )
    }
}
export default Login