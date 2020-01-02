import React from 'react';
import {

    Link,
} from 'react-router-dom'
import Modal from "./Modal"

import store from '../store';
// import ProductInfo from './ProductInfo'


class Product extends React.Component {


    handleAddCart = () => {
        store.dispatch({
            type: "ADD_CART",
            product: {
                ...this.props.product,
                user: store.getState().loggedIn.activeUser
            }

        })

    }




    render() {
        const { id, title, img, rating, price } = this.props.product;

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
                                <div data-toggle="modal" data-target={`#exampleModal${id}`} onClick={this.handleAddCart} className="actionBtn">Add Cart</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal message="Added to Cart" id = {id} img = {img} title={title} />
            </div>
        )
    }
}

export default Product