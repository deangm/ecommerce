import React from 'react'
import Product from './Product'

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        }
    }

    renderProducts() {

        if (this.state.filter) {
            let filteredProducts = this.props.products.filter((p) => 
    
          { 
              let title = p.title.toLowerCase();
              let filter = this.state.filter.toLowerCase(); 
              return title.includes(filter) || p.category.includes(filter) 
            }
        )

            return filteredProducts.map((p, index) => {
                return (
                    <Product product={p} key={index} />
                )
            })

        }
        else{
            return this.props.products.map((p, index) => {
                return (
                    <Product product={p} key={index} />
                )
            })
        }

    }


    handleSearch = (e) => {
        this.setState({
            filter: e.target.value
        })
    }


    render() {
        return (
            <div >

                <div>
                    <div className="title">
                        Product Page
                    </div>
                    <div className="search">
                        <input onChange = {this.handleSearch} value = {this.state.filter} placeholder="search" />
                    </div>
                </div>



                <div className="d-flex container flex-wrap justify-content-between"> {this.renderProducts()}</div>

            </div>
        )

    }
}

export default ProductsPage;