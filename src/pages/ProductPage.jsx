// ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';

function ProductPage() {
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

  const renderPrice = () => {
    const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;
    
    if (hasDiscount) {
      return (
        <>
          <h5 className="text-muted text-decoration-line-through">
            ${product.price.toFixed(2)}
          </h5>
          <h3>
            <Badge bg="success">
              Sale ${product.discountedPrice.toFixed(2)}
            </Badge>
          </h3>
        </>
      );
    } else {
      return (
        <h3>${product.price.toFixed(2)}</h3>
      );
    }
  };
  

  return (
    <Container>
      <Row className="justify-content-md-center my-4">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <ListGroup variant="flush">
                {renderPrice()}
                <ListGroup.Item>Rating: {product.rating} stars</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Tags: {product.tags.join(', ')}</small>
            </Card.Footer>
          </Card>
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-4">
              <h3>Reviews</h3>
              <ListGroup>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review.id}>
                    <strong>{review.username}</strong>: {review.description}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
