import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Root: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div className='max-w-7xl mx-auto min-h-screen'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;