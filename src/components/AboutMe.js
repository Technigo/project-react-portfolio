/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import startFigure from './images/startFigure.png';
import { OuterWrapper, InnerWrapper } from './GlobalStyleComponents';

/* About Me component, with a picture of and arrow that points to the start of the text */

const AboutMe = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <AboutMeContainer>
          <AboutMeBox>
            <AboutMeParagraph><span><StartArrow src={startFigure} className="AboutMEImg" alt="small logo that points to text" /> </span>Hello World and people in it, I’m Viktor. A computer-loving gamer turned adult, turned store manager, turned sales support and product planner,
             turned… drumroll… frontend developer! Hi *kind wave*. Cruising the waves of css and html, java’s and react’s and not regretting going full computer-lover full-circle at 34, one bit.
              I’ve always been about making peoples days a little better whether it’s behind a cashier or in a support call, doing it with awesome applications and websites is even better.
            </AboutMeParagraph>
          </AboutMeBox>
        </AboutMeContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

/* Styled components for About Me */

const StartArrow = styled.img`
@media (max-width: 800px) {
  width: 13%;
}
`;

const AboutMeContainer = styled.div`
    display: flex;
`;

const AboutMeBox = styled.div`
    display:flex;
    align-items: center;
`;

const AboutMeParagraph = styled.p`
    color: black;
    font-size: 24px;
    line-height: 1.8;
  
    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 1.4;
    }
`;

export default AboutMe;