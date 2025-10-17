// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  const project = {
    title: "PharmaHub",
    image: "https://i.ibb.co/4cW2DwT/images-5.jpg",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Other Packages",
    ],
    description:
      "PharmaHub is a modern medicine e-commerce platform designed to simplify the process of buying healthcare products online. The platform connects customers with a wide range of medicines, supplements, and health products from trusted sellers, making healthcare more accessible, convenient, and reliable.",
    liveLink: "https://twelve1-assignment-ph.web.app/",
    githubLink: "https://github.com/Shijan-Pias/assignment-12-client",
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard project={project} />
        {/* You can add more ProjectCard components here for other projects */}
      </div>
    </div>
  );
};

export default Projects;
