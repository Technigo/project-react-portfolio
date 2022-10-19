import React from 'react';
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';

const Thoughts = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>MY THOUGHTS</SectionHeading>
        <DateHeader>OCT 2022</DateHeader>
        <ThoughtsHeadline>The journey continues</ThoughtsHeadline>
        <ThoughtsText>Thoughts...</ThoughtsText>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const DateHeader = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  color: #db9aab;
`
const ThoughtsText = styled.p`
  font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 8px;
`

const ThoughtsHeadline = styled.h4`
  font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 30px;
`

export default Thoughts