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

         <Body Skills> 
            <Skills/>
        </Body>

        <Body Projects> 
            <Projects/>
        </Body>

        <Body Tech> 
             <Tech/>
        </Body>

        <Body Thoughts> 
            <Thoughts/>
        </Body>

        <Body ForMore> 
            <ForMore/>
        </Body> 

 </>
)
}

const Body = styled.div `
height: auto;

background-color: ${(props) => 
    props.Intro ? "#f6f5f0" :
    props.Tech ? "#ffffff" :
    props.Projects ? "#f6f5f0" :
    props.Skills ? "#ffffff" :
    props.Thoughts ? "#ffffff" :
    props.ForMore ?  "rgb(132, 172, 180)" 
    : "none"};
`