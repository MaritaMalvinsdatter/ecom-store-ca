// Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/globalStyles.css'

const Layout = ({ children, cartItemCount }) => {
  return (
    <div className="layout">
      <Header cartItemCount={cartItemCount} />
      <main className="mainContent">{children}</main> 
      <Footer />
    </div>
  );
};

export default Layout;
