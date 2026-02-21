import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Pages/Footer';
import { Navbar } from './Navbar';

const Home1 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home1;