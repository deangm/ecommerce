import React from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';


class Product extends React.Component {
    render() {
        console.log(this.props);
        const { title, image, rating, price, description } = this.props;
        let cardStyles = {
            width: '18rem',
        }
        let imgStyles = {
           width: "100px",
           height: "100px",
           objectFit: "contain",
        }
        return (

            <div class="card" style={cardStyles} >
                <img style={imgStyles} src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        )
    }
}

export default Product