/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

export const ProjectBox = ({ list }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/KajaWilbik/repos')
      .then((respons) => {
        return respons.json();
      })
      .then((data) => {
        setProject(data);
      })
  }, []);
  console.log('everything is fine in fetch', project)

  return (
    project.map((projects) => {
      return (
        <div key={projects.full_name}>
          <h2>{projects.name}</h2>
          <p>{projects.description}</p>
        </div>

      )
    })
  )
}

// {repository.map((project) => {
//     return(
//         <div key={project.id}>
//         {project}
//         </div>

