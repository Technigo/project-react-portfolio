import React from 'react';
import { SectionContainer, ArticleContainer, ThoughtsImage } from './styled/Containers.styled';
import { ProjectsGrid } from './styled/Grids.styled';
import Paragraph from './styled/Paragraph.styled';
// import { TopicsContainer } from './styled/Topics.styled';
import thoughtImg from '../assets/thought_article.png';
import { TopicsContainer } from './styled/Topics.styled';

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
                <h6>October 2022</h6>
              </div>
            </ThoughtsImage>
          </a>
          <h5>Some personal gibberish</h5>
          <Paragraph grid>About how
          I started learning web development.
          </Paragraph>
          <TopicsContainer thoughts>
            <a
              href="#"
              target="_blank"
              rel="noreferrer">
              Read article <span>{'>>'}</span>
            </a>
          </TopicsContainer>
        </ArticleContainer>

        <ArticleContainer thoughts>
          <a href="#" target="_blank" rel="noreferrer">
            <ThoughtsImage style={{ backgroundImage: `url(${thoughtImg})` }}>
              <div>
                <h6>Coming soon</h6>
              </div>
            </ThoughtsImage>
          </a>
          <h5>Some personal gibberish</h5>
          <Paragraph grid>About 5 things you must NOT know to be a developer in 2022.
          </Paragraph>
          <TopicsContainer thoughts>
            <a
              href="#"
              target="_blank"
              rel="noreferrer">
              Read article <span>{'>>'}</span>
            </a>
          </TopicsContainer>
        </ArticleContainer>

      </ProjectsGrid>
    </SectionContainer>
  );
};

export default Thoughts;