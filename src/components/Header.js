/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import ProfilePicture from 'components/images/Josefine_SB.jpeg'
import LinkedIn from 'components/images/linkedin_icon.png'
import GitHub from 'components/images/github_icon.png'
// import StackOverflow from 'components/images/stack_overflow_icon.png'
// import HeroVideo from 'components/images/HeroMovie.mp4'

const LinkedInURL = 'https://www.linkedin.com/in/josefine-engdahl-2654946a'
const GitHubURL = 'https://github.com/JosefineEngdahl'
// const StackOverflowURL = 'https://stackoverflow.com/users/19477357/josefine-engdahl?tab=profile'



export const Header = () => {
return (

<HeadNav> 

<Hero autoPlay muted loop playsinline className="hero-video">
  <source src="./HeroMovie.mp4" type="video/mp4"/>
</Hero>
    {/* <Hero autoPlay muted loop playsinline className="hero-video">
    <source src={HeroVideo}/>
    </Hero> */}

        <ProfileImage
            src= {ProfilePicture} 
            alt= "Profile image"/> 

        <a 
            href={LinkedInURL} 
            target="_blank">
                <Icon 
                className= "icon1" 
                src={LinkedIn} 
                alt="LinkedIn"/>
        </a>

        <a 
            href={GitHubURL} 
            target="_blank">
                <Icon2
                className= "icon2" 
                src={GitHub}
                alt= "Github"/>
         </a>

        {/* <a 
            href={StackOverflowURL} 
            target="_blank">
                <Icon3 
                className= "icon3" 
                src={StackOverflow}
                alt= "Stack Overflow"/>
            </a> */}
             
        <Text>
            <SmallHead>PORTFOLIO: <Name>JOSEFINE ENGDAHL</Name></SmallHead>
            <BigHead>frontend developer </BigHead>
            <MediumHead> & business controller</MediumHead>
       </Text>
</HeadNav>
  
 )
}

const BigHead= styled.div `
font-family: "Montserrat";
font-size: 42px;
font-weight: bolder;
padding: 5px;

@media (min-width: 668px) and (max-width: 1024px) {
    font-size: 55px;    
}

@media (min-width: 1024px) {
font-size: 66px;   
}
`

const MediumHead= styled.div `
font-family: "Montserrat";
  font-size: 30px;

  @media (min-width: 1024px) {
    font-size: 40px;   
    }
`

const SmallHead= styled.div `
@media (min-width: 1024px) {
    font-size: 25px;   
    }
`

const HeadNav = styled.div `
width: 100 vw;
height: 65vh;
position: relative;
background-size: cover;
background-position: center;
background-repeat: no-repeat;

@media (min-width: 668px) and (max-width: 1024px) {
height: 50vh;      
}
`

const Hero = styled.video`
    width: 100%;
    height: 65vh;
    object-fit: cover;
    position: relative; 

    @media (min-width: 668px) and (max-width: 1024px) {
        height: 50vh;
        }
`

const ProfileImage = styled.img`
width: 150px; 
right: 10%; 
bottom: -10%;
border-radius: 50%;
border: 2px solid white;
position: absolute;

@media (min-width: 668px) and (max-width: 1024px) {   
width: 175px;  
right: 10%; 
}

@media (min-width: 1024px) {
width: auto;
right: 15%;

 }

`
const Icon = styled.img`
width: 3em;
right: 50px; 
display: column;
top: 7%;
position: absolute;

`
const Icon2 =styled(Icon) `
right: 105px;
`
const Icon3 =styled(Icon) `
right: 160px;
`

const Text = styled.div `
    font-family: "Roboto";
    position: absolute;
    color: white;
    top: 25%;
    left: 10%;
    width: 80%; 

@media (min-width: 668px) and (max-width: 1024px) {
    top: 30%;
    width: 50%;
    left: 15%;
}

@media (min-width: 1024px) {
    top: 30%; 
    width: 40%;  
    left: 20%;
}
`

const Name = styled.b `
    font-weight: bolder;
    color: white;
    `
