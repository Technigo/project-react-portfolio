/* eslint-disable */

import React from 'react'
import styled from 'styled-components'

export const Skills = () => {
    return (
        <Wrapper> 
     <section>
     <div className="wavy-line wavy-line-yellow" data-text="xxxxxx" />
        <h3>Skills</h3>
        <div className="wavy-line wavy-line-yellow" data-text="xxxxxx" />
      </section>
    <InnerWrapper>        
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
        </InnerWrapper>    
        </Wrapper>
    )
}

const Wrapper = styled.div `
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
const InnerWrapper = styled.div`
width: 100%;
height; auto;
align-items: center;  
`


const Skill = styled.div`
display: grid;
width: 90%;
grid-template-columns: repeat(2, 1fr);
text-align: center;
margin: 15px 15px 30px 15px; 
gap: 10px; 

@media (min-width: 668px) and (max-width: 1024px) {
    width: 50%;
    margin: 15px 25% 30px 25%;
}

@media (min-width: 1024px) {
    width: 40%;
    margin: 15px 30% 30px 30%;
}
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



