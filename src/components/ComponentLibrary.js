import React from 'react'
import styled from 'styled-components/macro'

export const ProfileImage = styled.img`
  margin-top: 260px;
  display: flex;
  margin-left: auto;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 3px solid var(--imageframe);
  overflow: hidden;
`

const Line = styled.span`
  border: 1px solid var(--accent);
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: var(--accent);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`

export const Lollipop = () => (
  <>
    <Line />
    <Dot />
  </>
)

const Title = styled.h2`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 10px;
    padding-bottom: 45px;
    letter-spacing: 1px;
    color: white;
`

const TitleBackground = styled.span`
    background-color: var(--heading);
    padding: 3px;
`

export const Heading = ({ children }) => (
  <Title>
    <TitleBackground>
      {children}
    </TitleBackground>
  </Title>
)

export const Subheading = styled.h2`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 60px;
    padding-bottom: 20px;
`

export const HideOnMobile = styled.span`
  @media (max-width: 669px) {
    display: none;
  }
`

export const Wrapper = styled.div`
width: 90%;
max-width: 800px;
margin: 0 auto;
`
