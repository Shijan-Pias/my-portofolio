import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Home';
import About from '../Pages/About';
import Home1 from '../Home1';
import Projects from '../Project/Projects';
import Contact from '../Pages/Contact';
import Experience from '../Pages/Experience';
import Testimonials from '../Pages/Testimonials';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home1,
        children: [
            {
                index:true,
                Component:Home
            },

            {
                path:'/about',
                Component:About

            },
            {
                path:'contact',
                Component: Contact
            },
            {
                path:'projects',
                Component:Projects
            },
            {
                path:'experience',
                Component: Experience
            },
            {
                path:'testimonials',
                Component : Testimonials
            }
        ]
    },

]);

export default router;