import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import Paragraph from './styled/Paragraph.styled';
import Topic from './styled/Topic.styled';
import TopicsContainer from './styled/TopicsContainer.styled';
import ProjectImg from './styled/ProjectImg.styled';

const FeatProjects = () => {
  return (
    <SectionContainer bg>
      <h4>Featured Projects</h4>
      <ArticleGrid>

        <ArticleCard>
          <a href="https://gladatankar.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project1>
              <div>
                <h6>Happy Thoughts</h6>
              </div>
            </ProjectImg>
          </a>
          <h5>Happy Thoughts</h5>
          <Paragraph grid>React project made to practice hooks and get/post
          requests to API.
          </Paragraph>
          <TopicsContainer>
            <Topic>react</Topic>
            <Topic>javascript-es6</Topic>
            <Topic>api</Topic>
            <Topic>css3</Topic>
          </TopicsContainer>
          <TopicsContainer>
            <a href="https://gladatankar.netlify.com" target="_blank" rel="noreferrer">View it live</a>
            | <a href="https://github.com/karlfredrikholm/project-happy-thoughts" target="_blank" rel="noreferrer">GitHub Repo</a>
          </TopicsContainer>
        </ArticleCard>

        <ArticleCard>
          <a href="https://webdevsurvey.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project3>
              <div>
                <h6>Web Dev Survey</h6>
              </div>
            </ProjectImg>
          </a>
          <h5>Survey</h5>
          <Paragraph grid>Survey made to get familiar with React and the useState hook.</Paragraph>
          <TopicsContainer>
            <Topic>react</Topic>
            <Topic>javascript-es6</Topic>
            <Topic>css3</Topic>
            <Topic>html5</Topic>
          </TopicsContainer>
          <TopicsContainer>
            <a href="https://gladatankar.netlify.com" target="_blank" rel="noreferrer">View it live</a>
            | <a href="https://github.com/karlfredrikholm/project-happy-thoughts" target="_blank" rel="noreferrer">GitHub Repo</a>
          </TopicsContainer>
        </ArticleCard>

        <ArticleCard>
          <a href="https://fint-vader.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project4>
              <div>
                <h6>Weather Web App</h6>
              </div>
            </ProjectImg>
          </a>
          <h5>Weather Web App</h5>
          <Paragraph grid>Vanilla JS project made with data from Open Weather API.</Paragraph>
          <TopicsContainer>
            <Topic>javascript-es6</Topic>
            <Topic>api</Topic>
            <Topic>css3</Topic>
            <Topic>html5</Topic>
          </TopicsContainer>
          <TopicsContainer>
            <a href="https://gladatankar.netlify.com" target="_blank" rel="noreferrer">View it live</a>
            | <a href="https://github.com/karlfredrikholm/project-happy-thoughts" target="_blank" rel="noreferrer">GitHub Repo</a>
          </TopicsContainer>
        </ArticleCard>

        <ArticleCard>

          <a href="https://nitflax.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project2>
              <div>
                <h6>Ice Cream Bot</h6>
              </div>
            </ProjectImg>
          </a>
          <h5>Chatbot</h5>
          <Paragraph grid>First JS project! Made to practice functions and DOM
          manipulation.
          </Paragraph>

          <TopicsContainer>
            <Topic>javascript-es6</Topic>
            <Topic>css3</Topic>
            <Topic>html5</Topic>
          </TopicsContainer>
          <TopicsContainer>
            <a href="https://gladatankar.netlify.com" target="_blank" rel="noreferrer">View it live</a>
            | <a href="https://github.com/karlfredrikholm/project-happy-thoughts" target="_blank" rel="noreferrer">GitHub Repo</a>
          </TopicsContainer>

        </ArticleCard>

      </ArticleGrid>
    </SectionContainer>
  )
};

export default FeatProjects;