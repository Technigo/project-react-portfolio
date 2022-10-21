/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

export const ProjectBox = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/KajaWilbik/repos')
      .then((respons) => respons.json())
      .then((data) => setProject(data))
      .finally(console.log('everything is fine in fetch', setProject));
  }, [])
  return (
    <div key={project.id}>
      <p>jajaksh{project.id}</p>
    </div>

  )
}

// {repository.map((project) => {
//     return(
//         <div key={project.id}>
//         {project}
//         </div>

