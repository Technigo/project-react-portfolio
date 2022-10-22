/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components'
import { A, InnerWrapper, OuterWrapper, P } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';
import Blogphoto from '../Images/blogphoto.jpg'

const Thoughts = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>MY THOUGHTS</SectionHeading>
        <BlogPic src={Blogphoto} alt="" />
        <DateHeader>OCT 2022</DateHeader>
        <ThoughtsHeadline>A new chapter begins...</ThoughtsHeadline>
        <A href="https://medium.com/@jessica.hansson/a-new-chapter-begins-d4f70646aef0">
          <P>&quot;Since I was young, I have always had a pretty clear vision of what I wanted to work with as a grownup
            — “something concerning nature and animals”. So how did programming happen? A revelation, perhaps.&quot;
          </P>
        </A>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const DateHeader = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 40px;
  color: #db9aab;
`

const ThoughtsHeadline = styled.h4`
  font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
`
const BlogPic = styled.img`
  width: 50%;
  display: flex;
  align-self:center;
  margin: 30px;
`

export default Thoughts