import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import Paragraph from './styled/Paragraph.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import ThoughtsImg from './styled/ThoughtsImg.styled';

const Thoughts = () => {
  return (
    <SectionContainer>
      <h4>Thoughts On Code</h4>
      <ArticleGrid>

        <ArticleCard>
          <ThoughtsImg>
            <div>
              <h6>Coming soon</h6>
            </div>
          </ThoughtsImg>
          <h5>Some Personal Gibberish</h5>
          <Paragraph grid>About how I started learning web development.</Paragraph>
        </ArticleCard>

        <ArticleCard>
          <ThoughtsImg>
            <div>
              <h6>Coming soon</h6>
            </div>
          </ThoughtsImg>
          <h5>Some Personal Gibberish</h5>
          <Paragraph grid>About how I started learning web development.</Paragraph>

        </ArticleCard>
      </ArticleGrid>
    </SectionContainer>
  );
};

export default Thoughts;