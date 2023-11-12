import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import styles from '../styles/HomePage.module.css'; 

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ProductList searchTerm={searchTerm} />
    </div>
  );
}

export default HomePage;
