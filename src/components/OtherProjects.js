import styled from 'styled-components';
import React from 'react'
import { Wrapper } from 'components/GlobalStyles'

export const OtherProjects = () => {
  return (
    <OtherWrapper primary>
      <OtherProjectText>
        <p>
        OtherProjects
        </p>
      </OtherProjectText>
    </OtherWrapper>
  )
}

export default OtherProjects;

const OtherWrapper = styled(Wrapper)`
`

const OtherProjectText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`