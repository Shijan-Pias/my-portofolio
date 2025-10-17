
import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiVercel, SiDaisyui
} from 'react-icons/si';
import { VscJson } from "react-icons/vsc";

// Skill data organized into categories
const skills = {
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'DaisyUI', icon: <SiDaisyui className="text-green-500" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-white" /> },
  ],
  database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  ],
  tools: [
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'REST APIs', icon: <VscJson className="text-blue-400" /> },
    { name: 'Vercel / Netlify', icon: <SiVercel className="text-gray-800 dark:text-white" /> },
  ],
};

const Skills = () => {
  const renderSkills = (skillList) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skillList.map((skill) => (
        <div 
          key={skill.name} 
          className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-3xl">{skill.icon}</div>
          <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Technical Skills
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-teal-500 pl-4">
              Frontend
            </h3>
            {renderSkills(skills.frontend)}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-teal-500 pl-4">
              Backend
            </h3>
            {renderSkills(skills.backend)}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-teal-500 pl-4">
              Database
            </h3>
            {renderSkills(skills.database)}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-teal-500 pl-4">
              Tools & Deployment
            </h3>
            {renderSkills(skills.tools)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;