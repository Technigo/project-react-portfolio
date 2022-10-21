import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

export const More = () => {
  return (
    <Section>
      <SectionHeader>MORE</SectionHeader>
      <MoreWrapper>
        <a
          href="https://www.linkedin.com/in/charlotte-johansson-51b063a4/"
          target="_blank"
          rel="noreferrer">
          <img
            src={linkedin}
            alt="link to linkedin" />
        </a>
        <a
          href="https://github.com/charlottejohansson"
          target="_blank"
          rel="noreferrer">
          <img
            src={github}
            alt="link to github" />
        </a>
      </MoreWrapper>
    </Section>
  )
}

export default More;

const MoreWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    position: relative;
    padding: 20px;
    align-items: center;
    justify-content: center;

    img {
      height: 50px;
    }
`