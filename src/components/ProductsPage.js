import React from 'react'
import Product from './Product'

class ProductsPage extends React.Component{
    constructor(props){
        super(props);
    }

    renderProducts (){
        return this.props.products.map((p, index) => {
            return (
                <Product product = {p}/>
            )
        })
    }
    render(){
        return(
            <div className = "d-flex container flex-wrap justify-content-between">{this.renderProducts()}</div>
        )
        
    }
}

export default ProductsPage;