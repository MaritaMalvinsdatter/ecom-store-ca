// CartIcon.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const CartIcon = ({ itemCount }) => {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.cartIcon} onClick={goToCheckout}>
      <FaShoppingCart size={24} />
      {itemCount > 0 && (
        <span className={styles.itemCount}>
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
