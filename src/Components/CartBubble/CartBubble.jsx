import React, { useContext } from 'react';
import './CartBubble.css';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const CartBubble = () => {
    const {getTotalCartItems}= useContext(ShopContext);

    return (
        <div className='cart-pop'>
            <Link to={"/cart"}>
                <img src={cart_icon} alt = "cart"/>
                <div className='nav-cart-count'>{getTotalCartItems}</div>
            </Link>
        </div>
    );
};


export default CartBubble;