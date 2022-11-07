import React from 'react';
import { Section, SectionHeadlineBg, SectionHeadline } from 'StyledComponents/Section';
import { AiFillMediumCircle } from 'react-icons/ai'
import ThoughtsImg from './assets/thoughtimg.png'
import { CardContainer, ProjectContainer, ProjectInfo, ProjectImage } from './Projects';

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
          <a
            href="https://medium.com/@hannanorgard/how-coding-has-infiltrated-my-mind-15810705d3f6"
            target="_blank"
            rel="noreferrer">
            <AiFillMediumCircle size="25px" />
          </a>
        </CardContainer>
      </ProjectContainer>
    </Section>
  )
}

export default Thoughts;