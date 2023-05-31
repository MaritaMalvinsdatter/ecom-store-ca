import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-regular-svg-icons';

const CartIcon = () => {
    return (
      <div className="cart-icon">
        <FontAwesomeIcon icon={faBasketShopping} className="cart-icon" />
      </div>
    );
  };

export default CartIcon;