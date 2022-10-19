/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title } from 'StyledComponents/GlobalComponents'

const OtherProjectsContainer = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Arrow = styled.span`
color: red;
font-weight: 600;   
`

const OtherProjects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <OtherProjectsContainer>
          <Title>Other projects</Title>
      Om projektet <Arrow>&gt;&gt; </Arrow>
        </OtherProjectsContainer>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default OtherProjects