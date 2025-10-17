import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Home';
import About from '../Pages/About';
import Home1 from '../Home1';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contract';
import Projects from '../Project/Projects';

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
                path:'skills',
                Component:Skills
            },
            {
                path:'contact',
                Component: Contact
            },
            {
                path:'projects',
                Component:Projects
            }
        ]
    },

]);

export default router;