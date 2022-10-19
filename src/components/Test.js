import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 15px;
margin-top: 20px;
line-height: 30px;
@media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 15px;
`;

const SmallContainer = styled.div`
display: grid;
grid-columns; 1fr 1fr;
min-height: 350px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
background-color: #fff;
@media (max-width: 768px) {
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
    align-items: center;
    justify-items: center; 
`;


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: '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'
      }
    }
    fetch('https://api.github.com/users/hannanorgard/repos', options)
      .then((Response) => Response.json())
      .then((json) => setProjects(json))
  }, []);
  console.log(projects)

  return (
      <>
          {/* eslint-disable-next-line max-len  */}
          {projects.filter((project) => project.fork === true && project.private === false).slice(1, 5).map((project) => (
              <SmallContainer key={project.id}>
                  <a
                      href={project.html_url}
                      target="_blank"
                      rel="noreferrer">
                      <img
                          src=""
                          alt="" />
                  </a>
                  <div className="text-container">
                      <h4> {project.name}</h4>
                      <p> information about the project </p>
                  </div>
          ))}
  )
}

export default Projects;