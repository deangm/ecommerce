import React from 'react'
import Product from './Product'
class Cart extends React.Component{
    
    renderCart = () => {
        return this.props.products.map(p => <Product product = {p} />)
    }
    
    render(){
        return(
            <div>{this.renderCart()}</div>
        )
    }
}

export default Cart