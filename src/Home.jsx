import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Banner from './Pages/Banner';
import Projects from './Project/Projects';
import About from './Pages/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            
            <Projects></Projects>

            
        </div>
    );
};

export default Home;