/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import data from 'components/data.json';
// import GuessWho from 'components/images/guesswho.jpg';
export const Projects = () => {
    console.log(data);
    return (
    <Wrapper> 
  <h3>Featured Projects</h3>

<Card>
{data.map((data) => (
            <div key={data.title}>

<a 
                href={data.Repo}
                alt='project landingpage'
                target='_blank'>
    <Image    
            src= {data.Image} 
            alt= ""/> 
          
          <AllText>
           <BigText>{data.title}</BigText>
           <MediumText>{data.titleDescription}</MediumText>
           <SmallText>{data.projectDescription}</SmallText>
           <span>
           
           {data.tags.map((tag) => (
                      <div key={tag}>{tag}</div>
                    ))}
                    </span>
          </AllText>
         </a>


</div>

))}

</Card>
</Wrapper>

    )
}


const Wrapper = styled.div`
width: 100%;
height; 100%;
display: flex;
flex-direction: column;
align-items: center;  
border: solid blue 2px;
`

const Card = styled.div`
margin: 10px; 
width: 300px; 
height: auto;
border: solid red 2px;

@media (min-width: 668px) {
	
	 display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 25px; 
	 align-items: center;
	height: auto;
//använd även dessa tre för other projects
	    width: auto;
	    margin: 0px; 
	    transform: none;
	}

  @media (min-width: 668px) and (max-width: 1024px) {

    width: 280px; 
  }

`
const Image = styled.img `
  position: relative;
  background-position: center;
  background-size: cover;
 margin: 20px 0 0 0;
 width: 300px;
 height: 300px;
 border-radius: 8px;
 text-align: center;

 &:hover {
 transform: scale(1.1);
 transition: transform 0.5s;
 border: solid blue 2px;


@media (min-width: 668px) {
 width: auto;
 margin: 0px; 
 transform: none;
}
 }
`

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
top: 55%;
left: 50%;
color: rgb(255, 255, 255);
padding: 15px;
background:rgb(132, 172, 180);
transform: translate(-50%, -50%);
&:hover {

  background:rgb(101, 132, 138);
  color: white;

}
`
const MediumText = styled.h5`
font-weight: bold;
font-family: "Montserrat";
color: #ba4622;
line-height: 20px; 
margin: 10px 0 0 10px; 
`
const SmallText = styled.p`
line-height: 25px;  
color: black;
font-family: "Montserrat";
display: block;
`
