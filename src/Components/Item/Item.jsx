import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import heartfilled from '../Assets/heartfilled2.png'; 
import heartempty from '../Assets/heartempty.png'; 

const Item = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
        <div className="item-stock">
          {props.stock} left
        </div>
      </div>
      <div className="favorite-icon" onClick={toggleFavorite}>
        <img
          src={isFavorite ? heartfilled: heartempty}
          alt="favorite-icon"
          style={{ width: 30, height: 30, cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Item;
