import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from '../components/styles/Header.module.css'; 

const CartIcon = ({ itemCount }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
