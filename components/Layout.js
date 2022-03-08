import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className='mt-20 xl:mt-0'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
