import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Pages/Footer'

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