/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import { Intro } from 'components/MainComponents/Intro'
import { Skills } from 'components/MainComponents/Skills'
import { Projects } from 'components/MainComponents/Projects'
import { Tech } from 'components/MainComponents/Tech'
import { Thoughts } from 'components/MainComponents/Thoughts'
import { ForMore } from 'components/MainComponents/ForMore'

export const Main= () => {
    return (
    <>
        <Body Intro> 
            <Intro/>
        </Body>

        <Body Tech> 
             <Tech/>
        </Body>

        <Body Projects> 
            <Projects/>
        </Body>

         {/* <Body Thoughts> 
            <Thoughts/>
        </Body>  */}

        <Body Skills> 
            <Skills/>
        </Body>

        <Body ForMore> 
            <ForMore/>
        </Body> 

 </>
)
}

const Body = styled.div `
width: 100 vw;
height: auto;
display: flex;
flex-direction: column;
align-items: center;  
margin: auto; 

background-color: ${(props) => 
    props.Intro ? "#f6f5f0" :
    props.Tech ? "#ffffff" :
    props.Projects ? "#f6f5f0" :
    props.Thoughts ? "#ffffff" :
    props.Skills ? "#ffffff" :
    props.ForMore ?  "#70888F" 
    : "none"};

`