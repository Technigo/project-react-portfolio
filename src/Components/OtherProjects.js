/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const OtherProjectsContainer = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    margin-left: 5%;
    margin-right: 5%;
`

const Arrow = styled.span`
color: #FF7777;
    font-weight: 600;   
`

const OtherProjects = () => {
  return (
    <OtherProjectsContainer>
      Om projektet <Arrow />
    </OtherProjectsContainer>
  )
}

export default OtherProjects