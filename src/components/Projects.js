/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import { BASE_URL } from 'utils/urls';
import { MY_TOKEN } from 'utils/secret';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices, MainHeader, SecondHeader, MainSections, Title, MainText } from 'styles/mainStyles';

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      headers: {
        Authorization: `token ${MY_TOKEN}`
      }
    }
    fetch(BASE_URL, options)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        const listItems = [];
        list.map((item) => {
          if (item.fork === true && item.name.includes('project')) {
            listItems.push(item);
          }
          return 0;
        });
        setFilteredList(listItems);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const FeaturedProjects = filteredList.filter(
    (project) => (project.name !== 'project-news-site')
    && (project.name !== 'project-portfolio')
    && (project.name !== 'project-guess-who')
    && (project.name !== 'project-react-portfolio')
    && (project.name !== 'project-weather-app')
    && (project.name !== 'project-chatbot')
  )

  const OtherProjects = filteredList.filter(
    (project) => (project.name !== 'project-news-site')
    && (project.name !== 'project-portfolio')
    && (project.name !== 'project-happy-thoughts')
    && (project.name !== 'project-movies')
    && (project.name !== 'project-music-releases')
    && (project.name !== 'project-survey')
  )

  const renderTags = (tags) => {
    return tags.map((tag) => {
      return (<Tag>{tag}</Tag>)
    })
  }

  const renderProjects = (projects, addImage) => {
    return projects.map((project) => {
      return (
        <SingleWrap>
          <ProjectLinks key={project.id} href={project.homepage}>
            {addImage && <div className="test">
              <div className="image-overlay" />
              <h3 className="image-text">{project.name.replace(/-/g, ' ')}</h3>
              <img src={`https://raw.githubusercontent.com/malmen237/${project.name}/master/code/thumbnail/thumbnail.png`} className="featured-projects" alt="first-page" />
            </div>}
            <Title>{project.name.replace(/-/g, ' ')}</Title>
            <ProjectText>{project.description}</ProjectText>
            <Tags className="box-text">{renderTags(project.topics)}</Tags>
          </ProjectLinks>
        </SingleWrap>
      );
    });
  }

  if (loading) {
    return (
      <p>Page is loading...</p>
    );
  }

  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <MainHeader>FEATURED PROJECTS</MainHeader>
        <FeatureWrap>
          {renderProjects(FeaturedProjects, true)}
        </FeatureWrap>
        <SecondHeader>OTHER PROJECTS</SecondHeader>
        <OtherWrap>
          {renderProjects(OtherProjects, false)}
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

const ProjectText = styled(MainText)`
  color: black;
  font-family: 'Roboto', sans-serif; 
  text-align: left;
  margin: 0%;

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
  padding: 2%;
  color: black;
  background:  #cee663;
  margin-right: 2%;
  white-space: nowrap; 
`

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 0%;
`
const SingleWrap = styled.div`

  @media ${Devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, (50%));
    width: auto;
    gap: 20px;
    padding: 2%;
  }
  @media ${Devices.laptop} {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }
`
const FeatureWrap = styled.div`

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

const OtherWrap = styled.div`

  a {
    display: grid;
    grid-template-columns: 90px auto;
    width: 100%;
}

  .box-text {
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 1%;
    width: 35%;
  }
`

/*

<div class="other-projects">
                    <a href="https://github.com/malmen237/project-news-site">
                        <h3 class="title">NEWS SITE</h3>
                        <p>Responsive web site using HTML and CSS for a news site.</p>
                        <div class="box-text">
                            <h4><mark>HTML5</mark></h4>
                            <h4><mark>CSS3</mark></h4>
                        </div>
                    </a>
                </div>

*/

/*
{FeaturedProjects.map((project) => {
    return (
      <FeatureWrap>
        <ProjectLinks key={project.id} href={project.homepage}>
          <img src={`https://raw.githubusercontent.com/malmen237/${project.name}/master/code/thumbnail/thumbnail.png`} alt="first-page" />
          <Title>{project.name.replace(/-/g, ' ')}</Title>
          <ProjectText>{project.description}</ProjectText>
          <Tags className="box-text">{project.topics}</Tags>
        </ProjectLinks>
      </FeatureWrap>
    );
  })}
        {OtherProjects.map((project) => {
          return (
            <OtherWrap>
              <ProjectLinks key={project.id} href={project.homepage}>
                <Title>{project.name.replace(/-/g, ' ')}</Title>
                <ProjectText>{project.description}</ProjectText>
                <Tags className="box-text">{project.topics}</Tags>
              </ProjectLinks>
            </OtherWrap>
          );
        })}

  */