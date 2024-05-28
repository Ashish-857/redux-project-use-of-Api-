import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity} from './redux/cardActions';
import './card.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.items);
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    dispatch(updateQuantity(itemId, newQuantity));
  };

  return (
    <div className="card-container">
      <h2>Remove Items</h2>
      <ul className="item-list">
        {cartItems.map(item => (
          <li key={item.id} className="item">
            {item.title}<br></br>($){item.price}
            <img src={item.image}/>
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => handleQuantityChange(item.id, e)} 
              min="1" 
            />
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove To Card
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
