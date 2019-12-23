import React from 'react'
import CartItem from './CartItem'
import store from '../store'

class Cart extends React.Component {

    renderCart = () => {
        return this.props.products.map((p, index) => <CartItem product={p} key={index} />)
    }

    render() {
        const cartItems = this.renderCart();

        let total = 0;

         store.getState().cart.forEach(p => total += p.price)


        if (cartItems.length) {
            return (
                <div >


                    <div>
                        <div className="title">
                            My Cart
                         </div>
                        <div>
                            Total: {total}
                         </div>
                    </div>


                    <div className="d-flex container flex-wrap justify-content-between"> {cartItems}</div>

                </div>
            )
        }
        else {
            return (
                <div>
                    <div>
                        <div className="title">
                            My Cart
                         </div>
                    </div>
                    <div className="subTitle">Nothing in Cart</div>
                </div>
            )
        }

    }
}

export default Cart