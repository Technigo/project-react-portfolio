/* eslint-disable */

import React from 'react'
import styled from 'styled-components'

export const Footer = () => {

    return (
        <Foot> 
            <BigText>Contact</BigText>
            <SmallText>Josefine Engdahl</SmallText>
            <SmallText>+46 70 09 19 850</SmallText>
            <SmallText>josefine.engdahl@gmail.com</SmallText>
        </Foot>
    )
}

const Foot = styled.div `

background-color: rgb(132, 172, 180);
text-align: center;
flex-direction: column;
align-items: center;
width: 100 vw;
padding: 25px;
height: auto;

`
const BigText = styled.h4 `
color: white;
margin: 10px;
`
const SmallText = styled.p `
color: white;
 margin: 0px;
`




