import React from 'react'
import styled from 'styled-components'
import { SocMediaContainer } from 'Styled components/SocialMediaContainers'
import { OuterWrapper, InnerWrapper, SrOnly, A } from '../Styled components/GlobalStyles'
import { WhitePinkH2 } from '../Styled components/HeadlineStyles'
import github from '../Images/github-color.png'
import linkedin from '../Images/linkedin-color.png'
import stackoverflow from '../Images/stackoverflow-color.png'

const ForMore = () => {
  return (
    <OuterWrapper>
      <ForMoreInnerWrapper>
        <WhitePinkH2>FOR MORE</WhitePinkH2>
        <ForMoreContainer>
          <A href="https://www.linkedin.com/in/jessika-lind-1227221a4/">
            <img src={linkedin} alt="" />
            <SrOnly>Linkedin</SrOnly>
          </A>
          <A href="https://github.com/jessikalind">
            <img src={github} alt="" />
            <SrOnly>Git Hub</SrOnly>
          </A>
          <A href="https://stackoverflow.com/c/technigo/users/369">
            <img src={stackoverflow} alt="" />
            <SrOnly>Stackoverflow</SrOnly>
          </A>
        </ForMoreContainer>
      </ForMoreInnerWrapper>
    </OuterWrapper>
  )
}

export default ForMore

const ForMoreContainer = styled(SocMediaContainer)`
  width: 20vw;
  `
const ForMoreInnerWrapper = styled(InnerWrapper)`
  align-items: center;
`