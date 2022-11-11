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
{/* 
        <Body Skills> 
            <Skills/>
        </Body> */}

        {/* <Body ForMore> 
            <ForMore/>
        </Body>  */}

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
    props.Intro ? "#f3edeb" :
    props.Tech ? "#f3edeb" :
    props.Projects ? "#f3edeb"  :
    props.Thoughts ?"#f3edeb"  :
    props.Skills ? "#f3edeb"  :
    props.ForMore ?  "#f3edeb" 
    : "none"};

`