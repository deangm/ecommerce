import { createStore, combineReducers } from 'redux';




const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})



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
            return state.concat(action.product)
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store