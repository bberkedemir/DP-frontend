import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import { FaHeart, FaRegHeart } from 'react-icons/fa';  // Kalp ikonları

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
  const [favorites, setFavorites] = useState([]);  // Favori ürünler state'i

  const toggleFavorite = () => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((id) => id !== product.id));  // Ürünü favorilerden çıkar
    } else {
      setFavorites([...favorites, product.id]);  // Ürünü favorilere ekle
    }
  };

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />

      {/* Favori Butonu */}
      <div className="favorite-icon" onClick={toggleFavorite}>
        {favorites.includes(product.id) ? (
          <FaHeart color="red" size={30} />
        ) : (
          <FaRegHeart color="grey" size={30} />
        )}
      </div>

      <DescriptionBox />
    </div>
  );
};

export default Product;
