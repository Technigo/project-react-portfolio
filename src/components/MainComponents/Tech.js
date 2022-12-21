/* eslint-disable max-len */

import React from 'react'
import styled from 'styled-components'

export const Tech = () => {
  return (
    <Wrapper>
      {/* <section>
        <div className="wavy-line wavy-line-yellow" data-text="xxxxxx" /> */}
      <h3>Skills</h3>
      {/* <div className="wavy-line wavy-line-yellow" data-text="xxxxxx" />
      </section> */}
      <Text> <b>TECH:</b> HTML <l>| </l>CSS  <l>| </l> JavaScript  <l>| </l> React  <l>| </l> Redux <l>|</l> Node.js <l>| </l> Web Accessibly  <l>| </l> API:s  <l>| </l> mob- & pair programming  <l>|</l> Github</Text>
      <Text> <b>OTHER: </b> Finance <l>| </l>Business Strategy  <l>| </l> Project Management  <l>| </l> Presentation Skills </Text>
      <Text><b>TOOLBOX:</b> Figma <l>| </l>Slack  <l>| </l> Discord  <l>| </l> Teams  <l>| </l> excel  <l>| </l> Powerpoint  <l>| </l> Word  </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height; 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  

    section{
       display: flex;
       display: columns;       
       align-items: center;
       margin: 0px;   
}
    `

const Text = styled.p`
 margin: 10px 10px 20px 10px;

 l{
    color: grey;
 }

@media (min-width: 668px) {
    width: 65%; 
    margin: 20px 0px 50px 0; 
}

@media (min-width: 1024px) {
    width: 50%; 
    margin: 20px 0px 50px 0%; 
 }
`

