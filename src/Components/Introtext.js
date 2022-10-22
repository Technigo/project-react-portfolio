import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, P } from '../Styled components/GlobalStyles'

const IntroText = () => {
  return (
    <OuterWrapper gray>
      <InnerWrapper>
        <P><Line /><Dot />
            With an educational background in History, Political Science and Journalism
          and a professional background in web communication and administration – I
          have quite a lot to bring to the table as a Frontend developer. Not least of all:
          a love for code and a huge interest in learning new things.
        </P>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default IntroText

const Line = styled.span`
  border: 1px solid #a394f5;
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #a394f5;
  border-radius: 50%;
  display: inline-block;
`