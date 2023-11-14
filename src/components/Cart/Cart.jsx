import React, { Children } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = ({cart, children, handleDeleteCart}) => {
    let items=0, total=0;
    for(const pd of cart)
    {
        items+=(pd.quantity);
        total+=(pd.quantity*pd.price);
    }
    return (
        <div className='cart'>
            <h2>Order SUmmary</h2>
            <h4>Selected Items: {items}</h4>
            <p style={{marginBottom:'40px'}}>Total: ${total}</p>
            <button onClick={handleDeleteCart}>Clear Cart</button>
            <button>{children}</button>
        </div>
    );
};
Cart.propTypes;
export default Cart;