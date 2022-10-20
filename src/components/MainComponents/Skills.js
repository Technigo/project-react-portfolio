/* eslint-disable */

import React from 'react'
import styled from 'styled-components'

export const Skills = () => {
    return (
        <Wrapper> 
            <h3>Skills</h3>

        <Skill>
            <Code>
                <h5>Code</h5> 
                    <Text>HTML </Text>
                    <Text>CSS </Text>
                    <Text>JavaScript / React</Text>
                    <Text>GitHub </Text>
            </Code>

            <Upcoming>
                <h5>Upcoming</h5> 
                    <Text>Node.js </Text>
                    <Text>Redux</Text>
                   
            </Upcoming>

            <Toolbox>
                <h5>Toolbox</h5> 
                    <Text>Figma</Text>
                    <Text>Slack · Discord · Teams </Text>
                    <Text>excel ·  ppt · word</Text>
               
            </Toolbox>

            <More>
                <h5>More</h5> 
                    <Text>Project management </Text>
                    <Text>Business strategy </Text>
                    <Text>Finance</Text>
                    <Text>Presentation skills</Text>
            </More>
            </Skill>
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

const Skill = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
text-align: center;
margin: 15px 15px 30px 15px; 
gap: 10px; 
`

const Code = styled.div`
margin: 0px;
height: 50%;
`
const Upcoming = styled.div`
margin: 0px;
height: 50%;

`
const Toolbox = styled.div`
margin: 0px;
height: 50%;

`
const More = styled.div`
margin: 0px;
height: 50%;
`

const Text = styled.p `
line-height: 18px; 
font-size: 16px;
`



