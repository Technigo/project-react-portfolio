import React from 'react';
import styled from 'styled-components';
import { InnerWrapper, OuterWrapperGrey } from '../library/GlobalStyles'

export const Introduction = () => {
  return (
    <OuterWrapperGrey>
      <InnerWrapper>
        <Line /><Dot />
          Soon to be frontend-developer
      </InnerWrapper>
    </OuterWrapperGrey>
  )
}

const Line = styled.span`
  border: 1px solid #BA4581;
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
  background-color: #BA4581;
`

const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #BA4581;
    border-radius: 50%;
    display: inline-block;
`