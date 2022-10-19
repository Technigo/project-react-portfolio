import React from 'react'
/* import styled from 'styled-components' */
import { ContainerWhite } from 'GlobalStyles'
import Github from './Icon/Github.svg'
import Linkedin from './Icon/Linkedin.svg'
import StackOverFlow from './Icon/StackOverFlow.svg'

/* const IconContainer = styled.div`
  display: flex;
    align-items: flex-end;
    position:absolute;
    top: 2.8rem;
    right: 1.2rem;
 `  */

/* const Img = styled.span`
color: black;
size: 150%;
` */

const Icons = () => {
  return (
    <ContainerWhite>
      <div className="iconcontainer">
        <img src={Github} alt="logo github" />
        <h1>Github</h1>
      </div>
      <div className="iconcontainer">
        <img src={Linkedin} alt="logo github" />
        <p>LinkedIn</p>
      </div>
      <div className="iconcontainer">
        <img src={StackOverFlow} alt="logo github" />
        <p>StackOverFlow</p>
      </div>
    </ContainerWhite>
  )
}
export default Icons