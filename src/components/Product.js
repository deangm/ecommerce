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
                                <div data-toggle="modal" data-target={`#exampleModal${id}`} onClick={this.handleAddCart} className="addCart">Add Cart</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id={`exampleModal${id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Added to Cart</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <div>{title}</div>
                                    <img src = {img}/>
                                </div>

                             </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product