import React from 'react'
import Product from './Product'
class Cart extends React.Component{
    
    renderCart = () => {
        return this.props.products.map(p => <Product product = {p} />)
    }
    
    render(){
        
        const cartItems = this.renderCart();
     
      
        if(!cartItems.length == 0){
            return(
                <div>{cartItems}</div>
            )
        }
        else{
            return(
                <div>Nothing in Cart</div>
            )
        }
      
    }
}

export default Cart