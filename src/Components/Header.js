import React from 'react'
import styled from 'styled-components'
import { HeaderHeadlineOne, HeaderHeadlineTwo, HeaderHeadlineThree } from '../Styled components/HeadlineStyles'
import { A, SrOnly } from '../Styled components/GlobalStyles'
import Jessika from '../Images/Jessika.jpeg'
import Background from '../Images/Background.jpg'

const Header = () => {
  return (
    <HeaderSection>
      <HeaderInnerWrapper>
        <HeadlineContainer>
          <HeaderHeadlineOne>PORTFOLIO: <Bold>JESSIKA LIND</Bold></HeaderHeadlineOne>
          <HeaderHeadlineTwo>frontend developer</HeaderHeadlineTwo>
          <HeaderHeadlineThree> + communicator & administrator</HeaderHeadlineThree>
        </HeadlineContainer>
        <SocMediaContainer>
          <A href="https://www.linkedin.com/in/jessika-lind-1227221a4/">
            <img src="./linkedin.png" alt="" />
            <SrOnly>
              <p>Linkedin</p>
            </SrOnly>
          </A>
          <A href="https://github.com/jessikalind">
            <img src="./github.png" alt="" />
            <SrOnly>
              <p>Github</p>
            </SrOnly>
          </A>
          <A href="https://stackoverflow.com/c/technigo/users/369">
            <img src="./stacko.png" alt="" />
            <SrOnly>
              <p>Stackoverflow</p>
            </SrOnly>
          </A>
        </SocMediaContainer>
        <ProfilePic src={Jessika} alt="Picture of Jessika Lind" />
      </HeaderInnerWrapper>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.header`
  background-image: url(${Background});
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
`
const HeaderInnerWrapper = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 3fr;
  position: relative;
  height: 55vh;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 60%
  }
  @media (min-width: 1025px) {
    width: 60%
  }
  @media (min-width: 1600px) {
    width: 50%;
  }

`
const HeadlineContainer = styled.div`
  color: white;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 50vw;
`
const Bold = styled.span`
  font-weight: 700; 
`
const SocMediaContainer = styled.div`
  grid-column: 2/3;
  align-self: center;
  padding-top: 7vh;
  display: flex;
`
const ProfilePic = styled.img`
  width: 140px;
  border-radius: 50%;
  border: solid 2px white;
  position: absolute;
  right: 10vw;
  bottom: -5vh;
`