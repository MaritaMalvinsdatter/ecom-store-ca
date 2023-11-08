// CheckoutSuccessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccessPage = () => {
  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Thank you for shopping with us today. Your order has been placed and is being processed.</p>
      <p>If you enjoyed your shopping experience here, please tell your friends about us! </p>
      <Link to="/">Back to Store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
