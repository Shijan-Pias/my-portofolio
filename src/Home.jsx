

import Projects from './Project/Projects';
import  About   from './Pages/About';
import { Banner } from './Pages/Banner';
import Experience from './Pages/Experience';
import Testimonials from './Pages/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          
            <About></About>
            
            <Projects></Projects>
            <Experience></Experience>
            <Testimonials></Testimonials>
            

            
        </div>
    );
};

export default Home;

