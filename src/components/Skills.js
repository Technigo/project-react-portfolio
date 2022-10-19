import React from 'react';
import { SectionTitle, Wrapper, OverlinedHeading, Paragraph } from './GlobalStyles';
/* import styled from "styled-components"; */

export const Skills = () => {
  return (
    <Wrapper primary>
      <SectionTitle>SKILLS</SectionTitle>
      <div className="skills-list">
        <div className="skill-category">
          <OverlinedHeading>CODE</OverlinedHeading>
          <Paragraph primary>HTML5</Paragraph>
          <Paragraph primary>CSS3</Paragraph>
          <Paragraph primary>JavaScript ES6</Paragraph>
          <Paragraph primary>APIs</Paragraph>
        </div>
      </div>
    </Wrapper>
  )
}