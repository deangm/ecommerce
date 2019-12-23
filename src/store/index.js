import { createStore, combineReducers } from 'redux';

const accounts = {
    activeUser: "",
    users: [
        {
            username: "Mikey",
            password: "Hello",
        }

    ]
}


const reducer = combineReducers({
    loggedIn: loginReducer,
    products: productReducer,
    cart: cartReducer
})



function loginReducer(state = accounts, action) {
    const username = action.username;

    switch (action.type) {
        case "LOGIN":
           let active = state.users.filter((user) => {
                if(user.username == username && user.password == action.password){
                    return user
                }
            })
            if(active.length){
                let newState = state;
                newState.activeUser = active[0].username
                return newState
            }
            else{
                return state;
            }
        default:
            return state;
    }
}

function productReducer(state = [], action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            return state.concat(action.product)
        default:
            return state;

    }
}

function cartReducer(state = [], action) {
    switch (action.type) {
        case "ADD_CART":
            let exists = state.filter(p => p == action.product);
            if (exists.length == 0) {
                return state.concat(action.product)
            }
            else {
                return state;
            }
        case "REMOVE_CARTITEM":

            let newState = state.filter((p) => {
                console.log(p, action.product);
                return p != action.product
            })
            console.log(newState);
            return newState
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store