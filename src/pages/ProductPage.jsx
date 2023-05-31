// ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() { // Rename the component to ProductPage
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch the product');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching the product.</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div>Id: {product.id}</div>
      <div>Title: {product.title}</div>
      <img src={product.imageUrl} alt="Product" />
    </div>
  );
}

export default ProductPage;
