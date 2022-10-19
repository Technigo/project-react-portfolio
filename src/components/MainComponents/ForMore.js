/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import LinkedIn from 'components/images/linkedin_icon.png'
import GitHub from 'components/images/github_icon.png'
import StackOverflow from 'components/images/stack_overflow_icon.png'

const LinkedInURL = 'https://www.linkedin.com/in/josefine-engdahl-2654946a'
const GitHubURL = 'https://github.com/JosefineEngdahl'
const StackOverflowURL = 'https://stackoverflow.com/users/19477357/josefine-engdahl?tab=profile'


export const ForMore = () => {
    return (
        <Wrapper> 
            <h3>For More</h3>

            <SocialMediaContainer>
                <SocialMedia
                href={GitHubURL}
                target="_blank">
                    <Icon 
                 className= "icon"
                    src={GitHub}
                    alt= "Github"/>GITHUB
             </SocialMedia>

    
                <SocialMedia
                href={StackOverflowURL}
                target="_blank">
                    <Icon 
                   className= "icon"
                    src={StackOverflow}
                    alt= "Stack Overflow"/>GITHUB
                </SocialMedia>
        
    
                <SocialMedia 
                href={LinkedInURL}
                target="_blank">
                    <Icon
                     className= "icon"
                    src={LinkedIn}
                    alt= "LinkedIn"/>GITHUB
                </SocialMedia>
     

             </SocialMediaContainer>
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

const SocialMediaContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
text-align: center;
margin:25px 0px 0px 0px;  
`

const SocialMedia = styled.a`
display: flex;
flex-direction: column;
align-items: center; 
font-size: 15px;
margin: 10px;
color: white;
`
const Icon = styled.img `
margin: 7px; 
width: 4em;
right: 10%;
top: 7%;



`

