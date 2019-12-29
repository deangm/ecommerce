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
            product: {
                ...this.props.product,
                user: store.getState().loggedIn.activeUser
            }

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
                            <div className = "buttonCont">
                                <Link style={{ textDecoration: 'none' }} className="" to={`/product/${this.props.product.id}`}>
                                    Info
                                </Link>
                                <div onClick={this.handleAddCart} className="addCart">Add Cart</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product