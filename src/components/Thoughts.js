import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeadlineBg, SectionHeadline } from 'StyledComponents/Section';
import { AiFillMediumCircle } from 'react-icons/ai'
import ThoughtsImg from './assets/thoughtimg.png'
import OtherThoughtImg from './assets/2thoughtimg.png'
import { CardContainer, ProjectContainer, ProjectInfo, ProjectImage } from './Projects';

const MediumContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
margin: 0px auto;
`

const Thoughts = () => {
  return (
    <Section>
      {/* eslint-disable-next-line max-len  */}
      <SectionHeadline><SectionHeadlineBg>My thoughts on code</SectionHeadlineBg></SectionHeadline>
      <ProjectContainer>
        <CardContainer>
          <ProjectImage src={ThoughtsImg} />
          <ProjectInfo>
            Some thoughts on being a new developer.
          </ProjectInfo>
          <MediumContainer>
            <a
              href="https://medium.com/@hannanorgard/how-coding-has-infiltrated-my-mind-15810705d3f6"
              target="_blank"
              rel="noreferrer">
              <AiFillMediumCircle size="25px" />
            </a>
          </MediumContainer>
        </CardContainer>
        <CardContainer>
          <ProjectImage src={OtherThoughtImg} />
          <ProjectInfo>
            Soothing thoughts that have eased my mind.
          </ProjectInfo>
          <MediumContainer>
            <a
              href="https://medium.com/@hannanorgard/some-soothing-things-that-ease-the-scariness-of-being-a-junior-980e98fe01e3"
              target="_blank"
              rel="noreferrer">
              <AiFillMediumCircle size="25px" />
            </a>
          </MediumContainer>
        </CardContainer>
      </ProjectContainer>
    </Section>
  )
}

export default Thoughts;