import React from 'react'
import styled from 'styled-components/macro'
import SocialIcon from './SocialIcon'
import { ProfileImage, Wrapper } from './ComponentLibrary'

const MainHeader = styled.header`
  width: 100%;
  height: 475px;
  background-image: url("assets/images/header_crop.jpg");
  background-color: var(--headerfallback);
  position: relative;
  background-size: cover;
  background-position: 40% 60%;
  `

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 40px);
  justify-content: right;
  gap: 10px;
  padding-top: 40px;
`

const TextWrapper = styled.div`
  position: absolute;
  top: 30%;
  max-width: 300px;
`
const ImageWrapper = styled.div`
  justify-content: left;
`
const Name = styled.h1`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: var(--black);
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  color: var(--black);
  font-size: 46px;
  padding-top: 10px;
  font-weight: 700;
  line-height: 1.2;
`

const OtherTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  color: var(--black);
  font-size: 24px;
  padding-top: 10px;
  font-weight: 700;
  line-height: 1.2;
`

const Hero = () => {
  return (
    <MainHeader>
      <Wrapper>
        <IconContainer>
          <SocialIcon variant="linkedin" size={40} color="black" />
          <SocialIcon variant="github" size={40} color="black" />
          {/* <Icon variant="stackoverflow" size={40} color="black" /> */}
        </IconContainer>
        <TextWrapper>
          <Name>Portfolio: Amanda W.</Name>
          <Title>Frontend Developer</Title>
          <OtherTitle>With A Fashion Background</OtherTitle>
        </TextWrapper>
        <ImageWrapper>
          <ProfileImage src="./assets/images/me.jpg" />
        </ImageWrapper>
      </Wrapper>
    </MainHeader>
  )
}

export default Hero