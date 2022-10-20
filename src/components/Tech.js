import styled from 'styled-components';
import React from 'react'

export const Tech = () => {
  return (
    <section>
      <TechText>
        <p>
        HTML5, CSS, JavaScript, Github, Mob programming, React,
        pair-programming, API:s, Web accessability, Flexbox.
        </p>
      </TechText>
    </section>
  )
}

export default Tech;

const TechText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`