import React from 'react';
import { ThoughtCard, Image, OuterWrapper, InnerWrapper, MainHeadline, MediumHeadline } from 'styles/GlobalStyles';
import compTalk from '../assets/compTalk.jpg';
import eyeForDesign from '../assets/eyeForDesign.jpg';

export const MyThoughts = () => {
  return (
    <OuterWrapper>
      <MainHeadline>MY THOUGHTS ABOUT CODE</MainHeadline>
      <InnerWrapper>
        <ThoughtCard href="#" target="_blank" rel="noopener noreferrer">
          <Image src={compTalk} alt="" />
        </ThoughtCard>
        <ThoughtCard href="#" target="_blank" rel="noopener noreferrer">
          <Image src={eyeForDesign} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Esse doloremque molestias asperiores
          ipsa et aliquid non corrupti offici
          </p>
        </ThoughtCard>
      </InnerWrapper>
      <MediumHeadline color="#BA4C08">MORE THOUGHTS</MediumHeadline>
    </OuterWrapper>
  )
}

