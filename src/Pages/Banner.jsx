import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import image from '../assets/2d554837-2b6c-4815-bbe3-740979ed92e9.jpeg'

const Banner = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50"
        >
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                    Hi, I'm <span className="text-blue-600">Shijan Piyesh</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mt-3">
                    A Passionate <span className="text-blue-500">MERN Stack Developer</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
                    I build modern, responsive, and efficient web applications using the
                    latest technologies like React, Node.js, Express, and MongoDB.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <a
                        href="/contact"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Hire Me
                    </a>
                    <a
                        href="/Shijan_Piyesh_Resume.docx"
                        download
                        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                    >
                        Download Resume
                    </a>

                </div>

            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1 mt-10 md:mt-0 flex justify-center"
            >
                <img
                    src={image}
                    alt="developer"
                    className="w-64 md:w-96 rounded-full shadow-lg"
                />
            </motion.div>
        </section>
    );
};

export default Banner;
