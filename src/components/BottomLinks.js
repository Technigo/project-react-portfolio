import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices, MainHeader, MainSections, LinkedItems } from 'styles/mainStyles';
import LinkedInImg from '../Images/linked-in.png';
import GithubImg from '../Images/github.png';
import StackOverflowImg from '../Images/stack-overflow.png';

// Links found on the bottom of the page
const BottomLinks = () => {
  return (
    <MainSections>
      <InnerWrapper>
        <MainHeader>FOR MORE</MainHeader>
        <LinkWrapper>
          <BottomLink href="https://www.linkedin.com/in/linda-malm-7aa8866b/"><LinkImage src={LinkedInImg} alt="linked in" />LINKED IN</BottomLink>
          <BottomLink href="https://github.com/malmen237"><LinkImage src={GithubImg} alt="github" />GITHUB</BottomLink>
          <BottomLink href="https://stackoverflow.com/c/technigo/users/362"><LinkImage src={StackOverflowImg} alt="stack overflow" />STACK OVERFLOW</BottomLink>
        </LinkWrapper>
      </InnerWrapper>
    </MainSections>
  )
}

export default BottomLinks;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`

const BottomLink = styled(LinkedItems)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 8px;
  line-height: 25px;
  font-family: 'Roboto', sans-serif; 

  @media ${Devices.laptop} {
    font-size: 16px;
    line-height: 30px;
    width: auto;
  }
`

const LinkImage = styled.img`
  filter: hue-rotate(20deg);
  width: 60%;
  height: auto;

  @media ${Devices.laptop} {
    padding-bottom: 2%;
  &:hover {
    filter: invert(25%)
  }
}

`