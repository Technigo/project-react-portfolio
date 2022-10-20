
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import styled from 'styled-components';

export const ProjectBox = ({ repository, setProject }) => {
  fetch('https://api.github.com/users/KajaWilbik/repos')
    .then((respons) => respons.json())
    .then((data) => setProject(data))
    .finally(console.log('everything is fine in fetch', setProject))

  // {repository.map((project) => {
  //     return(
  //         <div key={project.id}>
  //         {project}
  //         </div>
}
