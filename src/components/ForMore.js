import React from 'react'
import styled from 'styled-components'
import github from './images/icons/github.svg'
import linkedin from './images/icons/linkedin.svg'
import stack from './images/icons/stack.svg'
import { OuterWrapper, InnerWrapper, Heading } from './Styling'

export const ForMore = () => {
  return (
    <OuterWrapper>
      <Heading dark> FOR MORE </Heading>
      <InnerWrapper>
        <SoMeGrid>
          <GridContent>
            <SoMeLink href="https://www.linkedin.com/in/maria-westling-a6327315b/"><img src={linkedin} alt="Linkedin" /></SoMeLink>
            <p>LINKEDIN</p>
          </GridContent>
          <GridContent>
            <SoMeLink href="https://github.com/marwebdesign"> <img src={github} alt="Github" /></SoMeLink>
            <p>GITHUB</p>
          </GridContent>
          <GridContent>
            <SoMeLink href="https://stackoverflow.com/c/technigo/users/392"><img src={stack} alt="Stack Overflow" /></SoMeLink>
            <p>STACK OVERFLOW</p>
          </GridContent>
        </SoMeGrid>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const SoMeGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`

export const GridContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
font-family: 'Roboto', sans-serif;
color: #42032C;
gap: 12px;
`

export const SoMeLink = styled.a`

`