/* eslint-disable max-len */

import React from 'react'
import styled from 'styled-components'

export const Tech = () => {
  return (
    <Wrapper>
      <section>
        <div className="wavy-line wavy-line-yellow" data-text="xxxxxx" />
        <h3>Tech</h3>
        <div className="wavy-line wavy-line-yellow" data-text="xxxxxx" />
      </section>
      <Text>HTML <l>| </l>CSS  <l>| </l> JavaScript  <l>| </l> React  <l>| </l> Web Accessibly  <l>| </l> API:s  <l>| </l> mob-programming  <l>| </l> pair-programming  <l>| </l> Github</Text>
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

