import React from "react";
import store from "../store"

class ProductInfo extends React.Component{
    
    findProduct = () => {
        return store.getState().products.filter(p => p.id == this.props.match.params.id
        )
    }
    
    render(){

        const product = this.findProduct();
        console.log(product)
        
        return(
            <div>{product[0].title}</div>
        )
    }
}

export default ProductInfo