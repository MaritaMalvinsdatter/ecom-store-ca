// ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, ListGroup, Badge, Button } from 'react-bootstrap';
import { useCart } from '../components/ShoppingCart';

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1 
    });
  };

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

  const renderReviews = () => {
    if (product.reviews && product.reviews.length > 0) {
      return (
        <Row className="justify-content-md-center mt-4">
          <Col md={6}>
            <h3>Reviews</h3>
            {product.reviews.map((review) => (
              <p key={review.id} className="mb-5">
                <strong>{review.username}</strong>: {review.description}
              </p>
            ))}
          </Col>
        </Row>
      );
    }
    return null;
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
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Tags: {product.tags.join(', ')}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
       {renderReviews()}
    </Container>
  );
}

export default ProductPage;
