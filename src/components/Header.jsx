import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartIcon from './CartIcon';
import { useCart } from './ShoppingCart';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'; 

const Header = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <Navbar expand="lg" className={`${styles.navbar} sticky-top`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.logoLink}>e-Com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
          <div className={styles.cartContainer}>
            <CartIcon itemCount={cartItemCount} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
