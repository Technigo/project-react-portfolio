/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import startFigure from './images/startFigure.png';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeBox>
        <AboutMeParagraph><span><img src={startFigure} className="AboutMEImg" alt="small logo that points to text" /> </span>Hello World and people in it, I’m Viktor. A computer-loving gamer turned adult, turned store manager, turned sales support and product planner,
             turned… drumroll… frontend developer! Hi *kind wave*. Cruising the waves of css and html, java’s and react’s and not regretting going full computer-lover full-circle at 34, one bit.
              I’ve always been about making peoples days a little better whether it’s behind a cashier or in a support call, doing it with awesome applications and websites is even better.
        </AboutMeParagraph>
      </AboutMeBox>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
    display: flex;
    width: 80%
`;

const AboutMeBox = styled.div`
    display:flex;
    align-items: center;
`;

const AboutMeParagraph = styled.p`
    color: blue;
`;

export default AboutMe;