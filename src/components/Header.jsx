import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartIcon from './CartIcon';
import styles from '../components/styles/Header.module.css'; 

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className={styles.header}>
        <Navbar.Brand href="/" className={styles.storeName}>e-Com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-end">
            <Nav className="align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div className={styles.cartContainer}>
              <CartIcon itemCount={cartItemCount} />
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
