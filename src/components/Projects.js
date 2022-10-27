
// Two "un-fixable" eslint-problems
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-tag-location */

import React, { useState, useEffect } from 'react';
import { BASE_URL } from 'utils/urls';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices, MainHeader, SecondHeader, MainSections, Title, MainText } from 'styles/mainStyles';

const Projects = () => {
  const [filteredList, setFilteredList] = useState([]);

  // Fetch from github API, the token is my hidden API-key
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_TOKEN}`
      }
    }
    fetch(BASE_URL, options)
      .then((response) => response.json())
      .then((data) => {
        // Maping that filters out all the repositorys
        // that's not Technigo-projects and sets them into an array
        const listItems = [];
        data.map((item) => {
          if (item.fork === true && item.name.includes('project')) {
            listItems.push(item);
          }
          return 0;
        });
        setFilteredList(listItems);
      })
      .catch((error) => console.error(error))
  }, []);

  // Filtered list of featured projects for mobile view
  const FeaturedProjectsMobile = filteredList.filter(
    (project) => (project.name !== 'project-news-site')
    && (project.name !== 'project-portfolio')
    && (project.name !== 'project-guess-who')
    && (project.name !== 'project-react-portfolio')
    && (project.name !== 'project-weather-app')
    && (project.name !== 'project-chatbot')
    && (project.name !== 'project-movies')
    && (project.name !== 'project-music-releases')
  );

  // Filtered list of other projects for mobile view
  const OtherProjectsMobile = filteredList.filter(
    (project) => (project.name !== 'project-news-site')
    && (project.name !== 'project-portfolio')
    && (project.name !== 'project-happy-thoughts')
    && (project.name !== 'project-survey')
  );

  // Filtered list of featured projects for tablet/desktop view
  const FeaturedProjects = filteredList.filter(
    (project) => (project.name !== 'project-news-site')
    && (project.name !== 'project-portfolio')
    && (project.name !== 'project-guess-who')
    && (project.name !== 'project-react-portfolio')
    && (project.name !== 'project-weather-app')
    && (project.name !== 'project-chatbot')
    && (project.name !== 'project-quiz')
  );

  // Filtered list of other projects for tablet/desktop view
  const OtherProjects = filteredList.filter(
    (project) => (project.name !== 'project-news-site')
    && (project.name !== 'project-portfolio')
    && (project.name !== 'project-happy-thoughts')
    && (project.name !== 'project-movies')
    && (project.name !== 'project-music-releases')
    && (project.name !== 'project-survey')
    && (project.name !== 'project-quiz')
  );

  // Function that sets the code-tags into separate units
  const renderTags = (tags) => {
    return tags.map((tag) => {
      return (<Tag>{tag}</Tag>);
    });
  }

  // Function that renders the differet items for each project
  const renderProjects = (projects, addImage) => {
    return projects.map((project) => {
      return (
        <SingleWrap>
          <ProjectLinks key={project.id} href={project.homepage}>
            {/* This part will only be rendered when it's set to true,
            so the image only appears with projects in the featured list */}
            {addImage && <div className="image-component">
              <div className="image-overlay" />
              <h3 className="image-text">{project.name.replace(/-/g, ' ')}</h3>
              <img src={`https://raw.githubusercontent.com/malmen237/${project.name}/master/code/thumbnail/thumbnail.png`} className="featured-projects" alt="first-page" />
            </div>}
            <ClonedTitle key={project.id}>{project.name.replace(/-/g, ' ')}</ClonedTitle>
            <ProjectText>{project.description}</ProjectText>
            <Tags className="box-text">{renderTags(project.topics)}</Tags>
          </ProjectLinks>
        </SingleWrap>
      );
    });
  }

  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <MainHeader>FEATURED PROJECTS</MainHeader>
        <FeatureWrapMobile>
          {renderProjects(FeaturedProjectsMobile, true)}
        </FeatureWrapMobile>
        <FeatureWrap>
          {renderProjects(FeaturedProjects, true)}
        </FeatureWrap>
        <SecondHeader>OTHER PROJECTS</SecondHeader>
        <OtherWrapMobile>
          {renderProjects(OtherProjectsMobile, false).reverse()}
        </OtherWrapMobile>
        <OtherWrap>
          {renderProjects(OtherProjects, false).reverse()}
        </OtherWrap>
      </InnerWrapper>
    </MainSections>
  );
}

export default Projects;

const ProjectLinks = styled.a`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 270px;
  padding-bottom: 8%;
  text-decoration: none;
`

const ClonedTitle = styled(Title)`
  padding-top: 0%;
`

const ProjectText = styled(MainText)`
  color: black;
  font-family: 'Roboto', sans-serif; 
  text-align: left;
  margin: 0%;
  margin-bottom: 0%;

  @media ${Devices.laptop} {
    &:hover {
      text-decoration: underline;
      color: #6fb9bd;
    }
  }
`

const Tag = styled.h4`
  font-size: 10px;
  font-family: 'Roboto', sans-serif; 
  padding: 3%;
  color: black;
  background:  #cee663;
  border-radius: 5px;
  margin-right: 5%;
  white-space: nowrap; 
`

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 0%;
`
const SingleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, (50%));
    width: auto;
    padding: 2%;
  }
  @media ${Devices.laptop} {
    display: grid;
    grid-template-columns: auto auto;
  }
`

const FeatureWrapMobile = styled.div`

  @media ${Devices.tablet} {
    display: none;
  }
`

const FeatureWrap = styled.div`
  display: none;

  @media ${Devices.tablet} {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    padding: 2%;
  }
  @media ${Devices.laptop} {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }
`

const OtherWrapMobile = styled.div`
  margin: 5%;
  a {
    display: flex;
    width: 100%;

  }

  .box-text {
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 1%;
    width: 35%;
  }

  @media ${Devices.tablet} {
    display: none;
  }
`

const OtherWrap = styled.div`
  display: none;

  @media ${Devices.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  a {
    @media ${Devices.tablet} {
      display: block;
      width: 100%;
    }
  }

  .box-text {
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 3%;
    width: 35%;
  }
`
