import React from 'react'
import styled from 'styled-components'
import github from './images/icons/github.svg'
import linkedin from './images/icons/linkedin.svg'
import { OuterWrapper, InnerWrapper, Heading } from './Styling'

export const ForMore = () => {
  return (
    <OuterWrapper>
      <Heading dark> FOR MORE </Heading>
      <InnerWrapper>
        <SoMeGrid>
          <GridContent>
            <SoMeLink href="https://www.linkedin.com/in/maria-westling-a6327315b/"><img src={linkedin} alt="Linkedin" />
              <p>LINKEDIN</p>
            </SoMeLink>
          </GridContent>
          <GridContent>
            <SoMeLink href="https://github.com/marwebdesign"> <img src={github} alt="Github" />
              <p>GITHUB</p>
            </SoMeLink>
          </GridContent>
        </SoMeGrid>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const SoMeGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 100px);
justify-content: center;
`

export const GridContent = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-gap: 10px;
/* display: flex;
flex-direction: column;
align-items: center;
justify-items: center; */
font-family: 'Roboto', sans-serif;
color: #42032C;
`

export const SoMeLink = styled.a`
 &:link {
  color:black;
  text-decoration: none;
}
 &:visited {
  color:black;
  text-decoration: none;
}
`