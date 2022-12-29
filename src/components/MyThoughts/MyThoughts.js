/* eslint-disable linebreak-style */
import React from 'react'
import { ArticleText, SectionContainer, SectionHeadings, SubHeadings } from 'Globalstyles';
import { StyledMyThoughts } from './MyThoughts.styles';

const MyThoughts = () => {
  return (
    <SectionContainer>
      <SectionHeadings>THOUGHTS</SectionHeadings>
      <StyledMyThoughts>
        <a href="https://medium.com/@sofie.rydmark/coding-all-night-71a8ee6d7199" role="button" aria-pressed="false" aria-label="mythoughts" target="_blank" rel="noreferrer">
          <img src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="coding-all-night" />
          <SubHeadings color="black">OCT 22</SubHeadings>
          <SubHeadings>CODING ALL NIGHT</SubHeadings>
          <ArticleText>
            Since Technigo`s bootcamp is designed to be fast-paced and challenge you to learn
            new things daily you will be searching for tools to help you in your coding-journey.
            These are some of the great tools and tips I have found are helping me learn
            as much as possible.
          </ArticleText>
        </a>
      </StyledMyThoughts>
    </SectionContainer>
  )
}

export default MyThoughts;