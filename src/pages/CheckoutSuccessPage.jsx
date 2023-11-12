
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CheckoutPage.module.css'; 

const CheckoutSuccessPage = () => {
  return (
    <div className={styles.centerContent}>
      <h1 className='m-5'>Order Successful!</h1>
      <p>Thank you for shopping with us today. Your order has been placed and is being processed.</p>
      <p>If you enjoyed your shopping experience here, please tell your friends about us! </p>
      <Link to="/">Back to e-Come Store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
