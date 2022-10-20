import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import Paragraph from './styled/Paragraph.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import ProjectImg from './styled/ProjectImg.styled';

const Thoughts = () => {
  return (
    <SectionContainer>
      <h4>Thoughts On Code</h4>
      <ArticleGrid>

        <ArticleCard>
          <ProjectImg project1 />
          <h5>Some Personal Gibberish</h5>
          <Paragraph grid>About how I started learning web development.</Paragraph>
        </ArticleCard>

        <ArticleCard>
          <ProjectImg project3 />
          <h5>Some Personal Gibberish</h5>
          <Paragraph grid>About how I started learning web development.</Paragraph>

        </ArticleCard>
      </ArticleGrid>
    </SectionContainer>
  );
};

export default Thoughts;