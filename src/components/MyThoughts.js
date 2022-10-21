import React from 'react';
import { ThoughtCard, Image, OuterWrapper, InnerWrapper, AlignLeftWrapper, MainHeadline, MediumHeadline } from 'styles/GlobalStyles';
import compTalk from '../assets/compTalk.jpg';
import eyeForDesign from '../assets/eyeForDesign.jpg';

export const MyThoughts = () => {
  return (
    <OuterWrapper>
      <MainHeadline>MY THOUGHTS ABOUT CODE</MainHeadline>
      <InnerWrapper>
        <ThoughtCard href="#" target="_blank" rel="noopener noreferrer">
          <Image src={compTalk} alt="" />
          <p>MMM YYYY</p>
          <h4>Learning to speak the computer&apos;s language</h4>
          <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Esse doloremque molestias asperiores
          ipsa et aliquid non corrupti offici
          <span>{'>'}{'>'}</span>
          </p>
        </ThoughtCard>
        <ThoughtCard href="#" target="_blank" rel="noopener noreferrer">
          <Image src={eyeForDesign} alt="" />
          <p>MMM YYYY</p>
          <h4>Developing an eye for design</h4>
          <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Esse doloremque molestias asperiores
          ipsa et aliquid non corrupti offici
          <span>{'>'}{'>'}</span>
          </p>
        </ThoughtCard>
      </InnerWrapper>

      <MediumHeadline color="#BA4C08">MORE THOUGHTS</MediumHeadline>
      <AlignLeftWrapper>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <p>MMM YYYY. COMING SOON...Lorem ipsum dolor sit amet. <span>{'>'}{'>'}</span></p>
        </a>
      </AlignLeftWrapper>
    </OuterWrapper>
  )
}

