// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg shadow-lg hover:shadow-2xl transition p-4 flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="rounded w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        >
          Live Site
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
