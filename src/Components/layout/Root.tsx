import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Root: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;