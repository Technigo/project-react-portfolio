import styled from 'styled-components';
import React from 'react-dom'
import { Title, Section, MainTextWhite } from '../styles/Main'

const Mythoughts = () => {
  return (
    <Section>
      <Title>My Thoughts</Title>
      <Article>
        <MainTextWhite>
        Article
        </MainTextWhite>
      </Article>
    </Section>
  );
}

export default Mythoughts;

const Article = styled.article`
    background-color: #677867;
    width: 100%;
    height: 200px;
    text-align: center;
    align-items: center;
`