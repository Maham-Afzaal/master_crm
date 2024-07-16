import React from 'react'
import TopBar from './components/TopBar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
      <div>
        <TopBar />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };

export default Layout