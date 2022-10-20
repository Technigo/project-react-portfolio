import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';
import Topic from './styled/Topic.styled';
import TopicsContainer from './styled/TopicsContainer.styled';
import ProjectImg from './styled/ProjectImg.styled';

const FeatProjects = () => {
  return (
    <SectionContainer bg>
      <SectionMainHeading>Featured Projects</SectionMainHeading>
      <ArticleGrid>

        <ArticleCard>
          <a href="https://gladatankar.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project1>
              <div>
                <p>Happy Thoughts</p>
              </div>
            </ProjectImg>
          </a>
          <SectionSubHeading>Happy Thoughts</SectionSubHeading>
          <Paragraph grid>React project made to practice get/post requests to API.</Paragraph>
          <TopicsContainer>
            <Topic>react</Topic>
            <Topic>hooks</Topic>
            <Topic>api</Topic>
            <Topic>css3</Topic>
          </TopicsContainer>
        </ArticleCard>

        <ArticleCard>
          <a href="https://webdevsurvey.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project3>
              <div>
                <p>Web Dev Survey</p>
              </div>
            </ProjectImg>
          </a>
          <SectionSubHeading>Survey</SectionSubHeading>
          <Paragraph grid>Survey made to get familiar with React and the useState hook.</Paragraph>
          <TopicsContainer>
            <Topic>react</Topic>
            <Topic>es6</Topic>
            <Topic>css3</Topic>
            <Topic>html5</Topic>
          </TopicsContainer>
        </ArticleCard>

        <ArticleCard>
          <a href="https://fint-vader.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project4>
              <div>
                <p>Weather Web App</p>
              </div>
            </ProjectImg>
          </a>
          <SectionSubHeading>Weather Web App</SectionSubHeading>
          <Paragraph grid>JS project done in pairs to practice working with an API.</Paragraph>
          <TopicsContainer>
            <Topic>js</Topic>
            <Topic>es6</Topic>
            <Topic>api</Topic>
            <Topic>css3</Topic>
            <Topic>html5</Topic>
          </TopicsContainer>
        </ArticleCard>

        <ArticleCard>

          <a href="https://nitflax.netlify.com" target="_blank" rel="noreferrer">
            <ProjectImg project2>
              <div>
                <p>Ice Cream Bot</p>
              </div>
            </ProjectImg>
          </a>
          <SectionSubHeading>Chatbot</SectionSubHeading>
          <Paragraph grid>Early project made to practice functions and DOM manipulation.</Paragraph>

          <TopicsContainer>
            <Topic>javascript</Topic>
            <Topic>es6</Topic>
            <Topic>css3</Topic>
          </TopicsContainer>

        </ArticleCard>

      </ArticleGrid>
    </SectionContainer>
  )
};

export default FeatProjects;