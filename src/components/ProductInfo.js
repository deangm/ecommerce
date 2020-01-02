import React from "react";
import store from "../store"
import Modal from "./Modal"

class ProductInfo extends React.Component {

    findProduct = () => {
        return store.getState().products.filter(p => p.id == this.props.match.params.id
        )
    }

    handleAddCart = (product) => {

        store.dispatch({
            type: "ADD_CART",
            product: {
                ...product[0],
                user: store.getState().loggedIn.activeUser
            }

        })

    }

    

    render() {

        const product = this.findProduct();
        const { id, title, img, rating, description } = product[0];

        let cardStyle = {
            maxWidth: "900px"
        }
        return (
            <div className = "productInfoCont">
                <div className="card mb-3" style={cardStyle}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={img} className="card-img" alt="product" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text"><small class="text-muted">{rating} out of 5 stars</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-toggle="modal" data-target={`#exampleModal${id}`} onClick={() => this.handleAddCart(product)} className="addCart">Add Cart</div>
                <Modal message="Added to Cart" id = {id} img = {img} title={title} />
            </div>
        )
    }
}

export default ProductInfo