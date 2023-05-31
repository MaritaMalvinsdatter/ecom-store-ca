import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function Home() {
  return <div>Home</div>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product List</Link> {/* Update the link URL */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<HomePage />} /> {/* Update the route path */}
          <Route path="/product/:id" element={<ProductPage />} /> {/* Update the route path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
