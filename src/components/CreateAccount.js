import React from 'react'
import store from "../store"
import { Link } from "react-router-dom"

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            password: ""

        }
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
        return (
            <div>
                <div className="subTitle">
                    Sign Up!
                </div>
                <div className="loginCont">
                        <div className="inputCont">
                            <input value={this.state.username} onChange={this.handleUsernameChange} placeholder="username"></input>
                            <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="password"></input>
                        </div>

                        <Link to="/Login" onClick={this.handleCreateAccountClick} className="actionBtn">Create My Account</Link>
                </div>
            </div>

                )
            }
        }
        
export default CreateAccount;