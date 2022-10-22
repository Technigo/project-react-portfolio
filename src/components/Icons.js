import React from 'react'
import styled from 'styled-components'
import { ContainerWhite } from 'GlobalStyles'

const Logos = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 50px; 
`
const SmallContainer = styled.div`
padding: 2.5rem;
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
&:hover {
  border: solid 5px; 
}
 `

const Icons = () => {
  return (
    <ContainerWhite>
      <Logos>
        <SmallContainer>
          <Link
            className="link_to_linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/amanda-elvkull-74717a153/"
            aria-label="link to linkedIN"
            rel="noreferrer">
            <I className="fa fa-linkedin linkedin1 fa-5x" />
          </Link>
        </SmallContainer>
        <SmallContainer>
          <Link
            className="link_to_github"
            href="https://github.com/AmandaElvkull"
            target="_blank"
            aria-label="link to Github"
            rel="noreferrer">
            <I className="fa fa-github github1 fa-5x" />
          </Link>
        </SmallContainer>
        <SmallContainer>
          <Link
            className="link_to_stackoverflow"
            href="https://stackoverflow.com/c/technigo/users/381"
            target="_blank"
            aria-label="link to StackOverflow"
            rel="noreferrer">
            <I className="fa fa-stack-overflow stackoverflow1 fa-5x" />
          </Link>
        </SmallContainer>
      </Logos>
    </ContainerWhite>
  )
}
export default Icons