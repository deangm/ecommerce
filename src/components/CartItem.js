import React from 'react';
import {

    Link,
} from 'react-router-dom'


import store from '../store';
// import ProductInfo from './ProductInfo'


class CartItem extends React.Component {

    handleRemoveCart = () => {
        store.dispatch({
            type: "REMOVE_CARTITEM",
            product: this.props.product

        })
    }

    render() {
        const { title, img, rating, price } = this.props.product;
        return (

            <div className="productCont">
                  <div className="card"  >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <div className="cartInfo">
                            <div className="rating">{rating} out of 5 -> {Math.floor(Math.random() * 100)} reviews</div>
                            <div className="productPrice">Price: ${price}</div>
                            <div className="buttonCont">
                                <Link style={{ textDecoration: 'none' }} className="" to={`/product/${this.props.product.id}`}>
                                    Info
                                </Link>
                                <div onClick={this.handleRemoveCart} className = "actionBtn">Remove</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CartItem