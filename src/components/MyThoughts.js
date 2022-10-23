import React from 'react';
import styled from 'styled-components';
import { ProjectCard, Image, OuterWrapper, InnerWrapper, AlignLeftWrapper, MainHeadline, MediumHeadline } from 'styles/GlobalStyles';
import compTalk from '../assets/compTalk.jpg';
import eyeForDesign from '../assets/eyeForDesign.jpg';

export const MyThoughts = () => {
  return (
    <OuterWrapper>
      <MainHeadline>MY THOUGHTS ABOUT CODE</MainHeadline>
      <InnerWrapper>
        <ProjectCard href="#" target="_blank" rel="noopener noreferrer">
          <Image src={compTalk} alt="" />
          <p><HighLighted>MMM YYYY</HighLighted></p>
          <h3>Learning to speak the computer&apos;s language</h3>
          <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Esse doloremque molestias asperiores
          ipsa et aliquid non corrupti offici.
          <HighLighted><span>{' >'}{'>'}</span></HighLighted>
          </p>
        </ProjectCard>
        <ProjectCard href="#" target="_blank" rel="noopener noreferrer">
          <Image src={eyeForDesign} alt="" />
          <p><HighLighted>MMM YYYY</HighLighted></p>
          <h3>Developing an eye for design</h3>
          <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Esse doloremque molestias asperiores
          ipsa et aliquid non corrupti offici.
          <HighLighted><span>{' >'}{'>'}</span></HighLighted>
          </p>
        </ProjectCard>
      </InnerWrapper>

      <MediumHeadline color="#BA4C08">MORE THOUGHTS</MediumHeadline>
      <AlignLeftWrapper>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <p>
            <HighLighted>MMM YYYY.</HighLighted> COMING SOON...Lorem ipsum dolor sit amet. <HighLighted>{'>'}{'>'}</HighLighted>
          </p>
        </a>
      </AlignLeftWrapper>
    </OuterWrapper>
  )
}

const HighLighted = styled.span`
  color: #BA4C08;
`