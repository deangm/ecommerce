import { createStore } from 'redux';

const store = createStore(reducer);

function reducer(state = {products:[]}, action){
    switch(action.type){
        case "ADD_PRODUCT": 
            return {
                ...state,
                products: state.products.concat(action.product)
            }
        default:
            return state;

    }
}

export default store