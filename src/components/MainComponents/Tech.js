/* eslint-disable */

import React from 'react'
import styled from 'styled-components'

export const Tech = () => {
    return (
        <Wrapper> 
         <h3>Tech</h3>
             <Text>HTML, CSS, JavaScript, React, Web Accessibly, API:s, mob-programming, pair-programming, Github</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
height; 100%;
display: flex;
flex-direction: column;
align-items: center;  

`


 const Text = styled.p `

 margin: 10px 10px 20px 10px;

@media (min-width: 668px) {
    width: 65%; 
    margin: 20px 0px 50px 0; 
}

@media (min-width: 1024px) {
    width: 50%; 
    margin: 20px 0px 50px 0%; 
 }
`
 
 

