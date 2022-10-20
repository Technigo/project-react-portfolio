/* eslint-disable */

import React from 'react'
import styled from 'styled-components'


export const Intro = () => {
    return (
        <div> 
            <Text> 
            <Line></Line>
            <Dot></Dot>
            <> </>
               With more than eight years of experience in finance I’m now deep diving into code and trying out a new Path. =IF only coding was as simple as Excel, but I’m all about solving problems and creating  #VALUE! 
            </Text>
        </div>
    )
}

const Text = styled.p `
margin: 45px 10px 20px 10px;

@media (min-width: 668px) {
    width: 75%; 
    margin: 75px 75px 75px 12.5%; 
}

@media (min-width: 1024px) {
    width: 50%; 
     margin: 50px 50px 50px 25%;
    }
`
const Line = styled.span`
    border: 1px solid #c85c3b;
    width: 30px;
    display: inline-block;
    margin-bottom: 4px;
  `
  
  const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #c85c3b;
    border-radius: 50%;
    display: inline-block;
`





