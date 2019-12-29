import React from "react";
import store from "../store"

class ProductInfo extends React.Component {

    findProduct = () => {
        return store.getState().products.filter(p => p.id == this.props.match.params.id
        )
    }

    render() {

        const product = this.findProduct();
        const { title, img, rating, description } = product[0];

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
            </div>
        )
    }
}

export default ProductInfo