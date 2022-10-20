/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import data from 'components/data.json';
import GitHub from 'components/images/github_icon.png'
//import { Button } from './components/Button' //hur får jag in denna?

export const Projects = () => {
    console.log(data);
    return (
  <Wrapper> 
    <h3>Featured Projects</h3>

    <Cards>
      {data.map((data) => (
        <div key={data.title}>
      <Card>
        <a 
                href={data.Netifly}
                alt='project landingpage'
                target='_blank'>
  
          <Image    
            src= {data.Image} 
            alt= ""/> 
          <BigText>{data.title}</BigText>
          
            <AllText>
              <MediumText>{data.titleDescription}</MediumText>
              <SmallText>{data.projectDescription}</SmallText>
           </AllText>
         </a>

         <Tags>
           {data.tags.map((tag) => (
             <Span key={tag}>{tag}</Span>
            ))}
                <Button>
                  <a 
                 href={data.Repo}
                  alt='project landingpage'
                  target='_blank'>

                  <Icon2
                    className= "icon2" 
                    src={GitHub}
                    alt= "Github"/>
                   </a>

                 </Button>
          </Tags>
        </Card>
      </div>
    ))}
  </Cards>

  <OtherProjects>
  <h4>Other projects</h4>


    <a href="https://steady-faun-1238b0.netlify.app" target="_blank">
      <SmallText>
        <Dot></Dot>
        <> </>
        <b> Happy Thoughts · </b> Sending happy thougts with API fetch och post requests <b> >> </b>
      </SmallText>
    </a>       
 
    <a href="https://thepepbot.netlify.app" target="_blank">
        <SmallText>
          <Dot></Dot>
          <> </>
          <b> Pep Bot · </b>Chat bot ( or Pep Bot) built in JavaScript <b> >> </b>
        </SmallText>  
    </a>       

    <a 
      href="https://celadon-brioche-831b80.netlify.app" target="_blank">
        <SmallText>
          <Dot></Dot>
          <> </>
          <b> Music Releases · </b>Music releases API built with React, designed as a music streaming platform with icons and hover effects. <b> >> </b>
        </SmallText>
    </a>       
          
  </OtherProjects>
</Wrapper>
)}


const Wrapper = styled.div`
  width: 100%;
  height; 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const Cards = styled.div`
  margin: 10px; 
  width: 300px; 
  height: auto;

@media (min-width: 668px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px; 
  align-items: center;
  height: auto;
  width: auto;
  margin: 15px 0; 
  transform: none;
	}

`
const Card = styled.div`
  position: relative;
  width: 300px;

&:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
}
`
const Image = styled.img `
  background-position: center;
  margin: 20px 0 0 0;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  text-align: center;

@media (min-width: 668px) {
  width: auto;
  margin: 0px; 
  transform: none;
  }
`

// TEXT

const AllText = styled.div`
  height: auto;
  margin: 20px 0 0 0;
  width: 300px;
  text-align: center;
  position: relative;
`

const BigText = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 17px;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  color: rgb(255, 255, 255);
  padding: 15px;
  background:rgb(132, 172, 180);
  transform: translate(-50%, -50%);

&:hover {
  background: hotpink;
  color: white;
}
`
const MediumText = styled.h5`
  font-weight: bold;
  font-size: 16px;
  font-family: "Montserrat";
  color: #ba4622;
  line-height: 20px; 
  margin: 10px 0 0 10px; 
`
const SmallText = styled.p`
  line-height: 25px;  
  font-size: 16px;
  color: black;
  font-family: "Montserrat";
  display: block;
`
// BUTTONS AND TAGS
const Tags = styled.div `
  display: flex;
  justify-content: center;
  text-align: center;

`
const Button = styled.button`
  border: none;
  background: none; 
&:hover {
  transform: scale(1.1);
  transition: transform 0.5s;
}
`
const Span = styled.span `
  margin: 5px;
  font-size: 13px;
  letter-spacing: 0.1em;
  color: grey;
  padding: 5px;
}
`
const Icon2 = styled.img `
  filter: invert();
  width: 3em;
`

// OTHER PROJECTS
const OtherProjects = styled.div `
width: 95%;
   margin: 10px;

@media (min-width: 668px) {
    width: 60%;
   }
  
  `
  
  const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #c85c3b;
    border-radius: 50%;
    display: inline-block;
`


