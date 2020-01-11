import React from 'react'
import CartItem from './CartItem'
import store from '../store'
import { Link } from 'react-router-dom'

class Cart extends React.Component {

    renderCart = () => {
        let items = this.props.products.filter((item) => {
            return item.user === store.getState().loggedIn.activeUser
        })
         return items.map((p, index) => <CartItem product={p} key={index} />)
    }

    render() {
        const cartItems = this.renderCart();

        let total = 0;
        let currentUser = store.getState().loggedIn.activeUser;
        let currentUserCart = store.getState().cart.filter(p => p.user == currentUser);

         currentUserCart.forEach(p => total += p.price)


        if (cartItems.length) {
            return (
                <div >


                    <div>
                        <div className="title">
                            My Cart
                         </div>
                        <div className = "cartTotalCont">
                            <div className="cartTotal">
                                Cart Total: ${total.toFixed(2)}
                            </div>
                            <Link to={`/Checkout/${currentUser}`} className= "actionBtn checkout">
                                Checkout
                            </Link>
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






