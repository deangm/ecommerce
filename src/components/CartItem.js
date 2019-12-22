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
        const { title, img, rating, price, description } = this.props.product;
        return (

            <div className="productCont">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>


                        <div className="buttonCont">


                            <Link style={{ textDecoration: 'none' }} className="btn btn-primary" to={`/product/${this.props.product.id}`}>
                                Info
                            </Link>


                            <a onClick={this.handleRemoveCart} className="btn btn-secondary">Remove</a>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default CartItem