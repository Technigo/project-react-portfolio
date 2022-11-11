/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import { ForMore } from 'components/MainComponents/ForMore'

export const Footer = () => {

    return (
        <Section>


        <Foot> 
            <ForMore/>
            <BigText>Contact</BigText>
            <SmallText>Josefine Engdahl</SmallText>
            <SmallText>+46 70 09 19 850</SmallText>
            <SmallText>josefine.engdahl@gmail.com</SmallText>
        </Foot>
        <div className="curve"></div>
    </Section>
    )
}

const Section = styled.section `
position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 470px;
    // padding-top: 100px;
    background: #FFB800;

`

const Foot = styled.div `
background: none;
text-align: center;
flex-direction: column;
align-items: center;
width: 100 vw;
padding: 0px;
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





