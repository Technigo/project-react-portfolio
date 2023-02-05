/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro'
import { A, InnerWrapper, OuterWrapper, P } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';
import { Arrow } from './OtherProjects.js'
import Blogphoto from '../Images/blogphoto.jpg'

const Thoughts = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>MY THOUGHTS</SectionHeading>
        <BlogPic src={Blogphoto} alt="" />
        <DateHeader>JAN 2023</DateHeader>
        <ThoughtsHeadline>How coding can make the world a better place</ThoughtsHeadline>
        <A href="https://medium.com/@jessica.hansson/how-coding-can-make-the-world-a-better-place-713fdc0c86d1">
          <P>&quot;Deep-diving into coding has definitely been a “wow-experience” for me, opening up my eyes for the potential of coding and the endless possibilities it can provide.  I am now happy to be a part of the coding and tech community, and can’t wait to jump on a new project where I might have the opportunity to make the world a little better place.&quot;  <Arrow>&gt;&gt;</Arrow>
          </P>
        </A>
        <DateHeader>OCT 2022</DateHeader>
        <ThoughtsHeadline>A new chapter begins...</ThoughtsHeadline>
        <A href="https://medium.com/@jessica.hansson/a-new-chapter-begins-d4f70646aef0">
          <P>&quot;Since I was young, I have always had a pretty clear vision of what I wanted to work with as a grownup
            — “something concerning nature and animals”. So how did programming happen? A revelation, perhaps.&quot;  <Arrow>&gt;&gt;</Arrow>
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
  color: #7c5f74;
  margin-top: 20px;
`

const ThoughtsHeadline = styled.h4`
  font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
`
const BlogPic = styled.img`
  width: 70%;
  display: flex;
  align-self:center;
  margin: 30px;
  border-radius : 15px;

  @media (min-width: 668px) {
    width: 50%;
    }
`

export default Thoughts