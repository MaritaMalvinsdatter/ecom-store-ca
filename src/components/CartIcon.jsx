// CartIcon.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const CartIcon = ({ itemCount }) => {
  return (
    <div className={styles.cartIcon}>
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
