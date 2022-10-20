import React from 'react'
import styled from 'styled-components'

const Logos = styled.div`
display: flex; 
align-items: flex-end;
position:absolute;
top: 3.2rem;
right: 1.2rem; 
`

const Link = styled.a`
text-decoration: nonen; `

const I = styled.i`
color: white;
display: inline-block;
border-radius: 80px;
box-shadow: 0 0 10px white;
padding: 0.3em 0.4em;
margin: 15px; 

@media (min-width: 768px) {
font-size: 200%;
    
}
  @media (min-width: 1024px) {
    font-size: 350%; 
    
  }
  &:hover {
    border: solid 4px white; 
}
 `

const IconHeader = () => {
  return (
    <Logos>

      <Link
        className="link_to_linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/amanda-elvkull-74717a153/"
        aria-label="link to linkedIN"
        rel="noreferrer">
        <I className="fa fa-linkedin linkedin1 fa-2x" />
      </Link>

      <Link
        className="link_to_github"
        href="https://github.com/AmandaElvkull"
        target="_blank"
        aria-label="link to Github"
        rel="noreferrer">
        <I className="fa fa-github github1 fa-2x" />
      </Link>

      <Link
        className="link_to_stackoverflow"
        href="https://stackoverflow.com/c/technigo/users/381"
        target="_blank"
        aria-label="link to StackOverflow"
        rel="noreferrer">
        <I className="fa fa-stack-overflow stackoverflow1 fa-2x" />
      </Link>
    </Logos>

  )
}
export default IconHeader