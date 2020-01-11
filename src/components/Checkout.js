import React from "react"
import store from '../store'
import { Link } from 'react-router-dom'

class Checkout extends React.Component {
    constructor(props){
        super(props);
        this.total = 0;
    }

    renderCartItems = () => {
        let currentUserCart = store.getState().cart.filter(p => p.user == this.props.match.params.user)
       

        return currentUserCart.map((p, ind) => {
            this.total += p.price;
        return(
            
                <div className = "checkoutItem" key = {ind}>
                    <div  key={ind}>{p.title}</div>
                    <div className = "checkoutPrice">${p.price}</div>
                </div>
             
            
        ) 
        })
    }

    handleCheckout = () => {
        store.dispatch({
            type: "CLEAR",
            user: this.props.match.params.user
        })
        this.total = 0;
    }

    render() {

        return (
            <div>
                <div className="checkoutCont">
                    <div className="checkoutForm">
                        <h4>
                            Checkout
                        </h4>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>CreditCard</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="CreditCard" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Expiration</label>
                                    <input type="text" className="form-control"  placeholder="Expiration" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label >CVC</label>
                                    <input type="text" className="form-control"  placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Email</label>
                                    <input type="email" className="form-control"  placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Username</label>
                                    <input type="text" className="form-control"  placeholder="UserName" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="form-group">
                                <label >Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label >State</label>
                                    <select id="inputState" className="form-control">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label >Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" >
                                        Save Payment Info
                                    </label>
                                </div>
                            </div>
                            <Link to="/Confirmation" className="actionBtn" onClick = {this.handleCheckout}>Submit Payment</Link>
                        </form>
                    </div>
                    <div className="checkoutList">
                        <div>Summary</div>
                        {this.renderCartItems()}
                        <div>Total: ${this.total}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Checkout