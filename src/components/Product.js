import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from 'react-router-dom'
  

import store from '../store';
import ProductInfo from './ProductInfo'


class Product extends React.Component {
    
    
    handleAddCart = () => {
        store.dispatch({
            type: "ADD_CART",
            product: this.props.product

        })
      
    }
    
    
    render() {
       
        const { title, img, rating, price, description } = this.props.product;
        let cardStyles = {
            width: '18rem',
            margin: "40px"
        }
        let imgStyles = {
           width: "100px",
           height: "100px",
           objectFit: "contain",
           margin: "20px auto",
           
        }
        let divStyles = {
            textAlign: "center",
        }
        return (

            <div className="card" style={cardStyles} >
                <img style={imgStyles} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    
                    <div style = {divStyles}>
                        <div className = "btn primary-btn">
                       
                            <Link to={`/product/${this.props.product.id}`}>
                                Info
                            </Link>
                      
                        </div>
                        <a onClick = {this.handleAddCart} className = "btn btn-secondary">Add Cart</a>
                    </div>
                  
                </div>
            </div>

        )
    }
}

export default Product