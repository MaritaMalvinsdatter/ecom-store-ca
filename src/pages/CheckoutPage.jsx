// CheckoutPage.jsx
import React from 'react';
import { useCart } from '../components/ShoppingCart';
import { Button, ListGroup, Image } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/CheckoutPage.module.css'; 

const CheckoutPage = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleCheckout = () => {
    setCart([]); 
    navigate('/checkout/success'); 
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Your Shopping Cart Items:</h2>
      <ListGroup className={styles.productList}>
        {cart.map((item, index) => (
          <ListGroup.Item key={index} className={styles.productListItem}>
            <div className={styles.productInfo}>
              <Image src={item.imageUrl} thumbnail className={styles.productThumbnail} />
              <div className={styles.productDetails}>
                <span className={styles.productTitle}>{item.title}</span>
                <span>{item.quantity} x ${item.price.toFixed(2)}</span>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className={styles.totalContainer}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Button variant="primary" onClick={handleCheckout}>Checkout your Cart</Button>
      </div>
      <p className={styles.continueShopping}>
        or <Link to="/">continue shopping</Link> for more items
      </p>
    </div>
  );
};

export default CheckoutPage;
