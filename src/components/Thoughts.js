import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';

const Thoughts = () => {
  return (
    <SectionContainer>
      <SectionMainHeading>Thoughts On Code</SectionMainHeading>
      <ArticleGrid>
        <ArticleCard>
          <SectionSubHeading>Some Personal Gibberish</SectionSubHeading>
          <Paragraph>About how I started learning web development.</Paragraph>
        </ArticleCard>
      </ArticleGrid>
    </SectionContainer>
  );
};

export default Thoughts;