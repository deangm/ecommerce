import React from 'react';
import {
   
    Link,
  } from 'react-router-dom'
  

import store from '../store';
// import ProductInfo from './ProductInfo'


class Product extends React.Component {
    
    
    handleAddCart = () => {
        store.dispatch({
            type: "ADD_CART",
            product: this.props.product

        })
      
    }
    
    
    render() {
        const { title, img, rating, price, description } = this.props.product;
        
        return (


            <div className="card"  >
                <img  src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    
                    <div className = "buttonCont">
                       
                       
                            <Link style={{ textDecoration: 'none' }} className = "btn btn-primary" to={`/product/${this.props.product.id}`}>
                                Info
                            </Link>
                      
                        
                        <a onClick = {this.handleAddCart} className = "btn btn-secondary">Add Cart</a>
                    </div>
                  
                </div>
            </div>

        )
    }
}

export default Product