import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import ProjectImg from './styled/ProjectImg.styled';

const Thoughts = () => {
  return (
    <SectionContainer>
      <SectionMainHeading>Thoughts On Code</SectionMainHeading>
      <ArticleGrid>

        <ArticleCard>
          <ProjectImg project1 />
          <SectionSubHeading>Some Personal Gibberish</SectionSubHeading>
          <Paragraph grid>About how I started learning web development.</Paragraph>
        </ArticleCard>

        <ArticleCard>
          <ProjectImg project3 />
          <SectionSubHeading>Some Personal Gibberish</SectionSubHeading>
          <Paragraph grid>About how I started learning web development.</Paragraph>

        </ArticleCard>
      </ArticleGrid>
    </SectionContainer>
  );
};

export default Thoughts;