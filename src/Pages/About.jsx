import { motion } from "framer-motion";
import profilePic from "../assets/2d554837-2b6c-4815-bbe3-740979ed92e9.jpeg"; // your image path

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center pt-24 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <img
            src={profilePic}
            alt="Shijan Piyesh"
            className="w-52 h-52 rounded-2xl object-cover shadow-lg"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Hello! I’m <span className="font-semibold text-blue-600">Shijan Piyesh</span>, a passionate web developer
            from Bangladesh. I specialize in building clean, responsive, and
            user-focused websites using modern web technologies like React,
            Tailwind CSS, and JavaScript. I love turning ideas into beautiful
            digital experiences that make people’s lives easier.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I’m currently studying at university and continuously improving my
            skills in full-stack development. My focus is on creating scalable
            web applications with a great user experience and clean UI design.
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
               Education
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
             
              <li>Currently studying at Gopalganj Science and Technology University </li>
              <li>Subject : Computer Science and Engineering (CSE)</li>
            </ul>
          </div>

        
        </motion.div>
      </div>
    </section>
  );
};

export default About;
