import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import { ProjectsGrid } from './styled/Grids.styled';
import ArticleContainer from './styled/ArticleContainer.styled';
import { ThoughtsImage } from './styled/ImageContainers.styled';
import Paragraph from './styled/Paragraph.styled';
import { TopicsContainer } from './styled/Topics.styled';
import thoughtImg from '../assets/thought_article.png';

const Thoughts = () => {
  return (
    <SectionContainer>
      <h4>Thoughts On Code</h4>
      <ProjectsGrid>

        <ArticleContainer thoughts>
          <a
            href="https://medium.com/@karlfredrikholm/some-personal-jibberish-about-how-i-started-learning-web-development-637271bdc665/"
            target="_blank"
            rel="noreferrer">
            <ThoughtsImage style={{ backgroundImage: `url(${thoughtImg})` }}>
              <div>
                <h6>How It All Started</h6>
              </div>
            </ThoughtsImage>
          </a>
          <h5>November 2022</h5>
          <Paragraph grid>Some personal gibberish about how
          I started learning web development.
          </Paragraph>
          <TopicsContainer>
            <a
              href="https://medium.com/@karlfredrikholm/some-personal-jibberish-about-how-i-started-learning-web-development-637271bdc665/"
              target="_blank"
              rel="noreferrer">
              Read Article
            </a>
          </TopicsContainer>
        </ArticleContainer>

        <ArticleContainer thoughts>
          <a href="#" target="_blank" rel="noreferrer" aria-hidden>
            <ThoughtsImage style={{ backgroundImage: `url(${thoughtImg})` }}>
              <div>
                <h6>Coming soon</h6>
              </div>
            </ThoughtsImage>
          </a>
          <h5>Coming Soon</h5>
          <Paragraph grid>Some personal gibberish about something
          else.
          </Paragraph>
          <TopicsContainer>
            <a
              href="#"
              target="_blank"
              rel="noreferrer">
              Read Article
            </a>
          </TopicsContainer>
        </ArticleContainer>
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default Thoughts;