import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import Paragraph from './styled/Paragraph.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import ThoughtsImg from './styled/ThoughtsImg.styled';
import TopicsContainer from './styled/TopicsContainer.styled';

const Thoughts = () => {
  return (
    <SectionContainer>
      <h4>Thoughts On Code</h4>
      <ArticleGrid>

        <ArticleCard thoughts>
          <ThoughtsImg>
            <div>
              <h6>How It All Started</h6>
            </div>
          </ThoughtsImg>
          <h5>November 2022</h5>
          <Paragraph grid>Some personal gibberish about how
          I started learning web development.
          </Paragraph>
          <TopicsContainer>
            <a href="https://medium.com/@karlfredrikholm/some-personal-jibberish-about-how-i-started-learning-web-development-637271bdc665" target="_blank" rel="noreferrer">
              Read article
            </a>
          </TopicsContainer>
        </ArticleCard>

        <ArticleCard thoughts>
          <ThoughtsImg>
            <div>
              <h6>Coming soon</h6>
            </div>
          </ThoughtsImg>
          <h5>Coming Soon</h5>
          <Paragraph grid>Some personal gibberish about something
          else.
          </Paragraph>
          <TopicsContainer>
            <a href="https://medium.com/@karlfredrikholm/some-personal-jibberish-about-how-i-started-learning-web-development-637271bdc665" target="_blank" rel="noreferrer">
              Read article
            </a>
          </TopicsContainer>
        </ArticleCard>
      </ArticleGrid>
    </SectionContainer>
  );
};

export default Thoughts;