import React from 'react'
import { Redirect } from 'react-router-dom'
import store from '../store';
import { Link } from "react-router-dom"
import $ from "jquery";



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    }


    handleLogin = () => {

        let users = store.getState().loggedIn.users;
        let userExists = users.filter(user => user.username == this.state.username);
        let passExists = users.filter(user => user.password == this.state.password);
    
        if (userExists.length == 0 || passExists.length == 0) {
            $("#alert").show();
        }
        else{
            store.dispatch({
                type: "LOGIN",
                username: this.state.username,
                password: this.state.password
            })
            $("#alert").hide()
        }
       

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


    handleCreateAccountClick = () => {

        store.dispatch({
            type: "CREATE_ACCOUNT",
            newAccount: {
                username: this.state.username,
                password: this.state.password,
            }
        })
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({

            password: e.target.value

        })
    }

    render() {

        if (!store.getState().loggedIn.activeUser) {
            return (


                <div className="cont">
                    <div className="subTitle">
                        Welcome Back!
                    </div>
                    <div id="alert" className = "alert alert-warning">
                            Incorrect Login Credentials
                    </div>
                    <div className="loginCont">
                        <div className="inputCont">
                            <form>
                                <label>UserName:</label>
                                <input onChange={this.userNameHandler} value={this.state.username} placeholder={"username"}></input>
                                <label>Password</label>
                                <input type="password" onChange={this.passwordHandler} value={this.state.password} placeholder={"password"}></input>
                            </form>

                        </div>
                        <button className="btn btn-primary" onClick={this.handleLogin}>Log In</button>
                        <Link className="actionBtn" to="/CreateAccount">
                            Create Account
                       </Link>
                        <div>
                         Createa an account to begin (username and pass are case sensitive)
                        </div>
                        
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