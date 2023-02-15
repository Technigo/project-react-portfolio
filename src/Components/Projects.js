/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper, Title, Tags, TagsContainer, Link } from 'StyledComponents/GlobalComponents'
import projectsdata from 'Data/projectsdata'
import { ClonedRedTitle } from './OtherProjects'

const MyProjects = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3vw;
  column-gap: 3vw;
  background: #F4F4F4;
  padding: 15px;
  
  a {
    position: relative;
    display: block;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  } `

const TextContainerProjects = styled.h1`
 padding-bottom: 20px;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
  img {
    width: 100%;
    display: block;
  }
`

/* const ImageContainer = styled.div`
  transition: 0.5s ease;

` */
/* const Thumbnail = styled.img`
   display: block;
    width: 100%;
    filter: brightness(0.50);
` */

const ImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  p {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 27px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    line-height: 30px;
    text-align:center;
    color: white;
    position: absolute;
    left: 0; 
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 690px) {
      font-size: 25px;
    }
  }
  &:hover {
    opacity: 0;
  }
`

const Projects = () => {
  /* const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ceciliamichele/repos')
      .then((res) => res.json())
      .then((data) => SetProjects(data))
  })

  const filteredProjects = projects.filter((project) => (project.name.includes('todo')) || (project.name === 'final-project') || (project.name === 'project-happy-thoughts') || (project.name.includes('movies')) || (project.name.includes('survey')) || (project.name.includes('music')))
*/
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Title>Featured projects</Title>
        <MyProjects>
          {projectsdata.map((project) => (
            <TextContainerProjects key={project.name}>
              <Link
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer">
                <ImgOverlay>
                  <p>{project.name}</p>
                </ImgOverlay>
                <img alt="project-img" src={project.image} />
              </Link>
              <ClonedRedTitle>
                {project.projectname}
              </ClonedRedTitle>
              {project.description}
              <TagsContainer>
                {project.topics.map(((topic) => <Tags>{topic}</Tags>))}
              </TagsContainer>

            </TextContainerProjects>
          ))}
        </MyProjects>

      </InnerWrapper>
    </OuterWrapper>

  )
}

export default Projects