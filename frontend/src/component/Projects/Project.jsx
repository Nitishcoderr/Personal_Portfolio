import React from 'react';
import './Project.css';
import { Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import {FaRegSmileWink} from 'react-icons/fa'
import ProjectCard from './ProjectCard';
const Project = () => {
  const projects = [1,2,3];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            url="https://github/nitishcoderr.com"
            projectImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/100px-JavaScript-logo.png"
            projectTitle="Project Sample"
            description="This is sample desc"
            technologies="Nodejs"
          />
        ))}
      </div>
      <Typography variant="h3" style={{font:"100 1.2rem 'Ubuntu Mono'" }} >
        All The Projects shown Above are made By me<FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Project;
