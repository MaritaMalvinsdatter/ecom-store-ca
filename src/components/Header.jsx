// Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartIcon from './CartIcon';
import styles from '../styles/Header.module.css';
import { useCart } from './ShoppingCart';

const Header = () => {
  const { cart } = useCart();

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  return (
    <header>
      <Navbar bg="light" expand="lg" className={styles.header}>
        <Navbar.Brand href="/" className={styles.storeName}>e-Com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <div className={styles.cartContainer}>
              <CartIcon itemCount={cartItemCount} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
