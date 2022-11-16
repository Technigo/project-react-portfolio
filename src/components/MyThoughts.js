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
        <ProjectCard href="https://medium.com/@tinabruce42/taking-a-plunge-into-the-deep-end-b919570557f" target="_blank" rel="noopener noreferrer">
          <Image src={compTalk} alt="" />
          <p><HighLighted>NOV 2022</HighLighted></p>
          <h3>Taking a plunge into the deep end</h3>
          <p>What can I say, sometimes in life you surprise yourself.
            That has certainly been the case with my newfound love for programming.
            Thinking back to about five years ago, when I would ask my programmer
            partner almost daily what was so interesting in that black screen with
            the different coloured text (yet resisting most of his attempts to actually show me),
            it’s not something I would’ve ever imagined enjoying.
          {/* …and staying afloat
            Changing careers and entering the world of tech - the journey so far. */}
          <HighLighted><span>{' >'}{'>'}</span></HighLighted>
          </p>
        </ProjectCard>
        <ProjectCard href="#" target="_blank" rel="noopener noreferrer">
          <Image src={eyeForDesign} alt="" />
          <p><HighLighted>MMM YYYY</HighLighted></p>
          <h3>Coming soon...</h3>
          {/* Developing an eye for design */}
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