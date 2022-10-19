import React from 'react'
import styled from 'styled-components'
import github from './images/icons/github.svg'
import linkedin from './images/icons/linkedin.svg'
import stack from './images/icons/stack.svg'
import { OuterWrapper, InnerWrapper, Heading } from './Styling'

export const ForMore = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Heading dark> FOR MORE </Heading>
        <SoMeGrid>
          <GridContent><SoMeLink> <a href="https://www.linkedin.com/in/maria-westling-a6327315b/"><img src={linkedin} alt="Linkedin" /></a></SoMeLink>
            <p>LINKEDIN</p>
          </GridContent>
          <GridContent> <SoMeLink><a href="https://github.com/marwebdesign"> <img src={github} alt="Github" /></a></SoMeLink>
            <p>GITHUB</p>
          </GridContent>
          <GridContent><SoMeLink><a href="https://stackoverflow.com/c/technigo/users/392"><img src={stack} alt="Stack Overflow" /></a></SoMeLink>
            <p>STACK OVERFLOW</p>
          </GridContent>
        </SoMeGrid>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const SoMeGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

export const GridContent = styled.div`
display: grid;
justify-items: center;
font-family: 'Roboto', sans-serif;
color: #42032C;
gap: 12px;
`

export const SoMeLink = styled.a`

`