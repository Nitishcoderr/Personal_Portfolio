import React from 'react';
import './Project.css';
import { Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { FaRegSmileWink } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
const Project = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            key={item._id}
            url={item.url}
            id={item.id}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>
      <Typography
        variant="h3"
        style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects shown Above are made By me
        <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Project;
