import React from 'react';
import styled from 'styled-components';
import { ProjectCard, Image, OuterWrapper, InnerWrapper, MainHeadline } from 'styles/GlobalStyles';
import compTalk from '../assets/compTalk.jpg';
// import eyeForDesign from '../assets/eyeForDesign.jpg';
import roadToMountain from '../assets/roadToMountain.jpg';

export const MyThoughts = () => {
  return (
    <OuterWrapper>
      <MainHeadline>MY THOUGHTS ABOUT CODE</MainHeadline>
      <InnerWrapper>
        <ProjectCard>
          <a href="https://medium.com/@tinabruce42/taking-a-plunge-into-the-deep-end-b919570557f" target="_blank" rel="noopener noreferrer">
            <Image src={compTalk} alt="" />
            <p><HighLighted>NOV 2022</HighLighted></p>
            <h3>Taking a plunge into the deep end</h3>
            <p>What can I say, sometimes in life you surprise yourself.
            That has certainly been the case with my newfound love for programming...
            <HighLighted><span>{' >'}{'>'}</span></HighLighted>
            </p>
          </a>
        </ProjectCard>
        <ProjectCard>
          <a href="https://medium.com/@tinabruce42/imposter-syndrome-and-the-road-to-mastery-3fabe656a36e" target="_blank" rel="noopener noreferrer">
            <ImageWrap>
              <Image src={roadToMountain} alt="" />
            </ImageWrap>
            <p><HighLighted>Jan 2023</HighLighted></p>
            <h3>Imposter syndrome and the road to mastery</h3>
            <RightParagaph>Having graduated from Technigo’s frontend development bootcamp,
              I’ve reached a milestone in my software development career.
              It makes me realise how much I’ve learnt, not only in the bootcamp...
            <HighLighted><span>{' >'}{'>'}</span></HighLighted>
            </RightParagaph>
          </a>
        </ProjectCard>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const HighLighted = styled.span`
  color: #BA4C08;
`

const ImageWrap = styled.div`
  width: 100%;

  @media (min-width: 1025px) {
    width: 70%;
  }
`

const RightParagaph = styled.p`
  width: 100%;

  @media (min-width: 1025px) {
    width: 70%;
  }
`