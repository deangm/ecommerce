import { createStore, combineReducers } from 'redux';

const accounts = {
    activeUser: "",
    users: [
        {
           Mikey: {
               password: "Hello",
           }
        }
    ]
} 


const reducer = combineReducers({
    loggedIn: loginReducer,
    products: productReducer,
    cart: cartReducer
})



function loginReducer(state = accounts, action){
    const username = action.username;
   
    switch(action.type){
        case "LOGIN":
            state.users.forEach((obj) => {
                if(obj.hasOwnProperty(action.username)){
                    if(action.password == obj[username].password){
                        
                        let newState = state;
                        newState.activeUser = username;
                        return newState
                    }
                }
                else{
                    return state
                }
            })
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

function cartReducer (state = [], action){
    switch (action.type) {
        case "ADD_CART":
                let exists = state.filter(p => p == action.product);
                if(exists.length == 0){
                   return state.concat(action.product)
                }
                else{
                    return state;
                }
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store