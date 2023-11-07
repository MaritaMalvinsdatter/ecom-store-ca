// AddToCart.jsx
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../path-to/CartContext';

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Button variant="primary" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCart;
