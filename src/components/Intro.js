/* eslint-disable quotes */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import styled from "styled-components/macro";
import { InnerWrapper, ClonedSectionWrapper } from "./styles/MainStyle";

const Intro = () => {
  return (
    <ClonedSectionWrapper>
      <InnerWrapper>
        <p tabIndex="0">
          <Line />
          <Dot /> Hi! I&apos;m a curious junior frontend developer with a
          background in social work. I&apos;m eager to continue learning and
          I&apos;m passionate about combining creativity and logic to build
          great and user-friendly products. Previous work experience has made me
          structured, responsible and skilled in working in teams as well as
          independently. I&apos;m a fast learner and i love finding solutions.
          With me in your team you will have a social and dedicated team member!
        </p>
      </InnerWrapper>
    </ClonedSectionWrapper>
  );
};

export default Intro;

const Line = styled.span`
  border: 1px solid #4f6970;
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`;
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #4f6970;
  border-radius: 50%;
  display: inline-block;
`;
