import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="icon-container">
          <FontAwesomeIcon icon={faStore} className="store-icon" />
        </div>
        <div className="text-container">
          <span className="store-name">e-Com</span>
        </div>
        <nav>
          {/* Add your navigation links here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

