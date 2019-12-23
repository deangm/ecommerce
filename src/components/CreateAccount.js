import React from 'react'
import store from "../store"

class CreateAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            account: {
                username: "",
                password: ""
            }
        }
    }
   
   
   handleCreateAccountClick = () => {
        
    store.dispatch({
            type: "CREATE_ACCOUNT",
            newAccount: this.state.account
        })
   }
   
   handleUsernameChange = (e) => {
        this.setState({
            account:{
                username: e.target
            }
        })
   }
   
    render() {
        return (
            <div>
                <div>
                    <input placeholder="username"></input>
                    <input placeholder="password"></input>
                </div>
                <div>
                    <button>Create My Account</button>
                </div>
            </div>
        )
    }
}

export default CreateAccount;