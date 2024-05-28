import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './card.css';
import { addItem } from './redux/cardActions';

const Cardmm = () => {
  const dispatch = useDispatch();
  const api = 'https://fakestoreapi.com/products';
  const [items, setItems] = useState([]);

  const fetchItems = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems(api);
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="card-container">
      {items.map(item => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} className="card-image" />
          <h2 className="card-title">{item.title}</h2>
          <p className="card-price">(${item.price})</p>
          <button onClick={() => handleAddToCart(item)} className="card-button">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cardmm;
