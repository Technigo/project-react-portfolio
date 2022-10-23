import React from 'react'
import styled from 'styled-components'
import { ContainerWhite, HeaderContainer, SectionHeader } from 'GlobalStyles'

const Logos = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const SmallContainer = styled.div`
padding: 1em;
@media (min-width: 768px) {
  padding: 2.5rem;
    
}

`
const Link = styled.a`
text-decoration: nonen; `

const I = styled.i`
color:  rgb(185, 0, 91);
display: inline-block;
border-radius: 80px;
box-shadow: 0 0 4px rgb(185, 0, 91);
padding: 0.3em 0.4em;
margin: 15px; 
@media (min-width: 768px) {
font-size: 350%;
    
}
  @media (min-width: 1024px) {
    font-size: 500%; 
    
  }
&:hover {
  border: solid 5px; 
}
 `

const Icons = () => {
  return (
    <ContainerWhite>
      <HeaderContainer>
        <SectionHeader>More</SectionHeader>
      </HeaderContainer>
      <Logos>
        <SmallContainer>
          <Link
            className="link_to_linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/amanda-elvkull-74717a153/"
            aria-label="link to linkedIN"
            rel="noreferrer">
            <I className="fa fa-linkedin linkedin1 fa-3x" />
          </Link>
        </SmallContainer>
        <SmallContainer>
          <Link
            className="link_to_github"
            href="https://github.com/AmandaElvkull"
            target="_blank"
            aria-label="link to Github"
            rel="noreferrer">
            <I className="fa fa-github github1 fa-3x" />
          </Link>
        </SmallContainer>
        <SmallContainer>
          <Link
            className="link_to_stackoverflow"
            href="https://stackoverflow.com/c/technigo/users/381"
            target="_blank"
            aria-label="link to StackOverflow"
            rel="noreferrer">
            <I className="fa fa-stack-overflow stackoverflow1 fa-3x" />
          </Link>
        </SmallContainer>
      </Logos>
    </ContainerWhite>
  )
}
export default Icons