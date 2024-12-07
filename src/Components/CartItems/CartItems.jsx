import React, { useContext, useState } from 'react'; 
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const [shippingFee, setShippingFee] = useState(0); 
  const [selectedShipping, setSelectedShipping] = useState(null); 
  const isCheckoutDisabled = selectedShipping === null;

  const ShippingOptions = () => {
    
    const handleOptionChange = (fee, option) => {
      setShippingFee(fee); 
      setSelectedShipping(option); 
    };

    return (
      <div className="shipping-options">
        <h3>Select Shipping Method</h3>
        <div className="shipping-option">
          <input
            type="radio"
            id="standard"
            name="shipping"
            onChange={() => handleOptionChange(0, 'standard')} 
          />
          <label htmlFor="standard">Standard Shipping (Free)</label>
        </div>
        <div className="shipping-option">
          <input
            type="radio"
            id="express"
            name="shipping"
            onChange={() => handleOptionChange(10, 'express')} 
          />
          <label htmlFor="express">Express Shipping ($10)</label>
        </div>
      </div>
    );
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      
      <ShippingOptions />

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>${shippingFee}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount() + shippingFee}</h3>
            </div>
          </div>
          <button 
            disabled={isCheckoutDisabled} 
            className={isCheckoutDisabled ? 'disabled' : ''}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;