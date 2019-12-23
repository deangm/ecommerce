import React from 'react'
import store from "../store"

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

        console.log(store.getState().loggedIn)
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
                <div>
                    <input value={this.state.username} onChange={this.handleUsernameChange} placeholder="username"></input>
                    <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="password"></input>
                </div>
                <div>
                    <button onClick={this.handleCreateAccountClick}>Create My Account</button>
                </div>
            </div>
        )
    }
}

export default CreateAccount;