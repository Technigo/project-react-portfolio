import styled from 'styled-components';
import React from 'react'

export const About = () => {
  return (
    <section>
      <AboutText>
        <p>
        I´m a curious frontend developer with passion for project management.
        During the last five years I have been working as a product developer
        and is now finally taking the step into coding aswell!
        </p>
      </AboutText>
    </section>
  )
}

export default About;

const AboutText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 40px auto 30px;
`