
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectPicture from '../Pictures/ProjectPicture.jpg'
import { StyledBoxDesktop } from './StyledBoxDesktop'

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

    // filtered and maped only forked projects from Github
    <StyledBoxDesktop>
    {project.filter((projects) => projects.fork === true && projects.name.includes('project')).map((filteredProjects) => {
      return (
        <StyledProjectBox className="grid" key={filteredProjects.full_name}>

          <a
            href={filteredProjects.html_url}
            target="_blank"
            rel="noreferrer">
            <h2>{filteredProjects.name.replaceAll('-', ' ').replaceAll('project', '')}</h2>
            <img src={`https://raw.githubusercontent.com/KajaWilbik/${filteredProjects.name}/master/thumbnail.png`} alt="thumbnail of project" />
            {/* <p>{filteredProjects.description}</p> */}
          </a>
          <div className="tags">
              {/* fetched tags from Github. First => make a changes in githib in each project */}
              <p>{filteredProjects.topics[0]}</p>
              <p>{filteredProjects.topics[1]}</p>
              <p>{filteredProjects.topics[2]}</p>
            </div>

        </StyledProjectBox>

      )
    })
   } </StyledBoxDesktop>
  )
}

const StyledProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;

    a {
      text-decoration:none;
      color: black;
    }
    
    a:hover {
      color: #779a96;
    }

    img {
    padding-top: 10px;
    width: 100%;
    }

    h2 {
      text-transform: uppercase
    }

    .tags {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      display: inline-flex;
      padding: 0.5rem;



    }

    .tags p {

      background-color: #7b9f9b;
      text-decoration: none;
  
       /* Matching line-height and font-size here gives full control 
       over the size of our tags to the padding*/
      font-size: 1rem; 
      line-height: 15px;
  
      /* Control the size of the tags */
      padding: 4px;
  
      /* Control the spacing of our tags */
      margin: 3px;
  
      /* Some rounded borders */
      border-radius: 5px;
    }


    @media screen and (min-width: 1024px) {
      margin: 20px;
      display: flex;
      flex-direction:column;
      align-items: center;
      text-align: center;
      justify-content: space-evenly;

    h2 {
      text-align: center;
      font-size: 35px;

    }

    p {
      font-size: 2rem;
    }
    
    img {
      align-content:center;
      
    }



    .tags {
      padding: 7px;
}
  }

`

