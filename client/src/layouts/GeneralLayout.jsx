import React from 'react';
import Navbar from '../components/Navbar';

const GeneralLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default GeneralLayout;
