import React from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';
import store from '../store';


class Product extends React.Component {
    
    
    handleAddCart = () => {
        store.dispatch({
            type: "ADD_CART",
            product: this.props.product

        })
        console.log(store.getState());
    }
    
    
    render() {
        console.log(this.props);
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

            <div class="card" style={cardStyles} >
                <img style={imgStyles} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div style = {divStyles}>
                        <a href="#" class="btn btn-primary">Learn More</a>
                        <a onClick = {this.handleAddCart} className = "btn btn-secondary">Add Cart</a>
                    </div>
                  
                </div>
            </div>

        )
    }
}

export default Product