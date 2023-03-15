import React from 'react'
import styled from 'styled-components/macro'
import SocialIcon from './SocialIcon'
import { ProfileImage, Wrapper } from './ComponentLibrary'

const MainHeader = styled.div`
  height: 475px;
  background-color: var(--headerfallback);
  position: relative;
  z-index: 1;
`

const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45px);
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
  font-family: "Roboto Flex", sans-serif;
  text-transform: uppercase;
  color: var(--black);
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  color: var(--black);
  font-size: 2.9rem;
  padding-top: 10px;
  font-weight: 700;
  line-height: 1.2;
`

const OtherTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  color: var(--black);
  font-size: 1.5rem;
  padding-top: 10px;
  font-weight: 700;
  line-height: 1.2;
`

const Hero = () => {
  return (
    <MainHeader>
      <HeroImage
        alt="Hero"
        srcSet="
      assets/images/kilimanjaro-studioz-_8mos_CBmBM-unsplash-small.jpg 1577w,
      assets/images/kilimanjaro-studioz-_8mos_CBmBM-unsplash-medium.jpg 2202w,
      assets/images/kilimanjaro-studioz-_8mos_CBmBM-unsplash-large.jpg 3384w
    "
        src="assets/images/kilimanjaro-studioz-_8mos_CBmBM-unsplash-small.jpg" />

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
          <ProfileImage src="./assets/images/me.jpg" style={{ zIndex: '3' }} />
        </ImageWrapper>
      </Wrapper>
    </MainHeader>
  )
}

export default Hero