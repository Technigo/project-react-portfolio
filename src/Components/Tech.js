/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title, TitleContainer } from 'StyledComponents/GlobalComponents'

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
          <TitleContainer>
            <Title>Tech</Title>
          </TitleContainer>
          <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX,
            React, React Hooks, Redux, Node.js, Web accessibility,
            API:s, mob-programming, pair-programming, GitHub
          </p>
        </MyTech>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Tech