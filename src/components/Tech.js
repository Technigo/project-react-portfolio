/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const Tech = () => {
  return (
    <SectionContainer bgColor="#eeeeee">
      <SectionHeadings>TECH</SectionHeadings>
      <SectionText>
                HTML, CSS, JavaScript, ES6, React, mob-programming, pair-programming
      </SectionText>
    </SectionContainer>
  )
}

export default Tech;

const SectionContainer = styled.section`
    display: block;
    text-align: center;
    margin-bottom: 50px;
`
const SectionHeadings = styled.h2`
    text-transform: uppercase;
    color: white;
    width: fit-content;
    margin: 0 auto 30px;
    background-color: #1f5d1e;
    padding: 1px 7px;
`
const SectionText = styled.p`
    line-height: 1.5;
`