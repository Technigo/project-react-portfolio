import React from 'react'
import styled from 'styled-components'
import { SocMediaContainer } from 'Styled components/SocialMediaContainers'
import { OuterWrapper, InnerWrapper } from '../Styled components/GlobalStyles'
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
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
          <img src={stackoverflow} alt="" />
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