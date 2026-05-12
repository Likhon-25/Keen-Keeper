import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

export const metadata = {
    title: 'Friends List | KeenKeeper',
  description: 'Manage your connections effectively',
  };

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default PublicLayout;