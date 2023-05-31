import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <div className="header-content">
        <div className="text-container">
          <span className="store-name">e-Com</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <CartIcon itemCount={cartItemCount} />
      </div>
    </header>
  );
};

export default Header;
