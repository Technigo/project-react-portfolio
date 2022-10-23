import styled from 'styled-components';
import React from 'react'
import { Wrapper } from 'components/GlobalStyles'

export const About = () => {
  return (
    <AboutWrapper primary>
      <AboutText>
        <p>
        I´m a curious frontend developer with passion for project management.
        During the last five years I have been working as a product developer
        and is now finally taking the step into coding aswell!
        </p>
      </AboutText>
    </AboutWrapper>
  )
}

export default About;

const AboutText = styled.p`
    position: relative;
    width: 320px;
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin-top: 120px;
    margin-bottom: 30px;
`

const AboutWrapper = styled(Wrapper)`
    align-items: center;
`