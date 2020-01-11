import React from 'react'
import store from "../store"
import $ from 'jquery';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            password: ""

        }
    }


    handleCreateAccountClick = () => {

        let users = store.getState().loggedIn.users;

        let exists = users.filter(user => user.username === this.state.username);
        if (!this.state.username) {
            $("#alertCreateAccount1").show()
            $("#alertCreateAccount2").hide()
        }
        else if (exists.length > 0) {
            $("#alertCreateAccount2").show()
            $("#alertCreateAccount1").hide()
        }
        else {
            store.dispatch({
                type: "CREATE_ACCOUNT",
                newAccount: {
                    username: this.state.username,
                    password: this.state.password,
                }
            })
            store.dispatch({
                type: "LOGIN",
                username: this.state.username,
                password: this.state.password
            })
            this.props.history.push("/Login")
            $("#alertCreateAccount1").hide()
            $("#alertCreateAccount2").hide()
        }


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
        return (
            <div>
                <div className="subTitle">
                    Sign Up!
                </div>
                <div id="alertCreateAccount1" className="alert alert-warning">
                    Please enter a username
                </div>
                <div id="alertCreateAccount2" className="alert alert-warning">
                    Username alread exists
                </div>
                <div className="loginCont">
                    <div className="inputCont">
                        <input value={this.state.username} onChange={this.handleUsernameChange} placeholder="username"></input>
                        <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="password"></input>
                    </div>

                    <div onClick={this.handleCreateAccountClick} className="actionBtn">Create My Account</div>
                </div>
            </div>

        )
    }
}

export default CreateAccount;