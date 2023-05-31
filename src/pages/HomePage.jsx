import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const productsData = await response.json();
        console.log(productsData);
        setProducts(productsData.slice(0, 50)); // Limit to first 50 products
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching the products.</div>;
  }

  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>{product.title || 'Untitled'}</Link> {/* Update the link URL */}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
