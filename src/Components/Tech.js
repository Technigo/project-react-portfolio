/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title } from 'StyledComponents/GlobalComponents'

const MyTech = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <MyTech>
          <Title>Tech</Title>
          <p>HTML, CSS, Flexbox, JavaScript, Web Accessibly, API:s,
        mob-programming, pair-programming, Github, Slack, Figma, Node, React
          </p>
        </MyTech>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Tech