import React from 'react'
import styled from 'styled-components'
import { HeaderHeadlineOne, HeaderHeadlineTwo, HeaderHeadlineThree } from '../Styled components/HeadlineStyles'

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
          <a href="https://www.linkedin.com/in/jessika-lind-1227221a4/">
            <img src="./linkedin.png" alt="" />
            <div class = "sr-only">
              <p>Linkedin</p>
            </div>
          </a>
          <a href="https://github.com/jessikalind">
            <img src="./github.png" alt="" /> 
            <div class = "sr-only">
              <p>Github</p>
            </div>
          </a>
          <a href="https://stackoverflow.com/c/technigo/users/369">
            <img src="./stacko.png" alt="" />
            <div class = "sr-only">
              <p>Stackoverflow</p>
            </div>
          </a>
        </SocMediaContainer>
        <img class ="profile-pic" src="./Jessika.jpeg" alt="Picture of Jessika Lind" />
        </HeaderInnerWrapper>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.header`
  background-color: black;
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