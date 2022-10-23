/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import styled from 'styled-components/macro';
import { ceruleanBlue, FancyArrows } from 'Styles';
import duck from '../assets/duck.PNG';

const MyThoughts = () => {
  return (
    <ThoughtsWrapper>
      <ThoughtsCard
        href="https://medium.com/@j.ohman_94583/your-friendly-neighbourhood-duck-73a5d3d3e8e3"
        target="_blank"
      >
        <ThoughtsImage />
        <ThoughtsDate>OKT 2022</ThoughtsDate>
        <ThoughtsInfoHeader>
          Your friendly neighbourhood duck 🦆
        </ThoughtsInfoHeader>
        <ThoughtsInfo>
          Do you ever come across a problem and feel totally stumped by it? You
          ask a coworker, fellow student, or friend for help, but before you
          finish explaining the problem, you realize the answer all by yourself.
          It turns out, you just needed to explain the problem out loud to get
          your brain into problem-solving mode.
          <FancyArrows>{'>>'}</FancyArrows>
        </ThoughtsInfo>
      </ThoughtsCard>
    </ThoughtsWrapper>
  );
};

export default MyThoughts;

const ThoughtsWrapper = styled.div`
  font-family: 'Roboto';
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
`;

const ThoughtsCard = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  position: relative;
`;

const ThoughtsImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 26px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580), url(${duck});
`;

const ThoughtsDate = styled.p`
  color: ${ceruleanBlue};
  font-size: 17px;

  @media (min-width: 800px) {
    font-size: 24px !important;
  }
`;

const ThoughtsInfoHeader = styled.h3`
  font-family: 'Roboto Bold', sans-serif;
  color: black;
  font-size: 24px;

  ${ThoughtsCard}:hover & {
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    font-size: 28px;
  }
`;

const ThoughtsInfo = styled.p`
  /* font-family: 'Roboto', sans-serif; */
  color: black;
  font-size: 17px;
  line-height: 1.4;

  ${ThoughtsCard}:hover & {
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    font-size: 24px !important;
  }
`;
