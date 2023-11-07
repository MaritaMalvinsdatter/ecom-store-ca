// Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cartItemCount }) => {
  return (
    <div className="layout">
      <Header cartItemCount={cartItemCount} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
