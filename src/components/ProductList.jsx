import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import styles from '../components/styles/ProductList.module.css';

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
    <div className={styles.productList}>
      <h2>Products</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className={styles.productCard}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title || 'Untitled'}</Card.Title>
                <Card.Text>
                  {product.description}
                  <br />
                  <strong>Price:</strong> ${product.discountedPrice || product.price}
                  <br />
                  <strong>Rating:</strong> {product.rating} stars
                </Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductList;
