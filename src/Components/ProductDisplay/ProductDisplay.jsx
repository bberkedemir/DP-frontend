import React, { useContext, useState } from 'react';
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import heartfilled from '../Assets/heartfilled2.png'; 
import heartempty from '../Assets/heartempty.png'; 

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const colors = ['black', 'red', 'white', 'grey'];
    const [selectedColor, setSelectedColor] = useState(null);
    const sizes = ['S', 'M', 'L', 'XL', 'XXL']; 
    const [selectedSize, setSelectedSize] = useState(null); 
    const isAddToCartDisabled = selectedSize === null || selectedColor === null;
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
            <div className="favorite-icon" onClick={toggleFavorite}>
                <img 
                    src={isFavorite ? heartfilled : heartempty} 
                    alt="favorite-icon" 
                    style={{ width: 30, height: 30 }} 
                />
            </div>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {sizes.map((size, index) => (
              <div
                key={index}
                className={`size-button ${selectedSize === index ? 'selected' : ''}`}
                onClick={() => setSelectedSize(index)} 
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="productdisplay-right-color">
          <h1>Select Color</h1>
          <div className="productdisplay-right-colors">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`color-button ${selectedColor === index ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className='product-stock-left'>{product.stock} left</div>
        <button className='addToCartButton' disabled={isAddToCartDisabled} onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
