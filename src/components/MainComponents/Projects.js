/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import { Image } from 'components/MainComponents/Image'
import data from 'components/data.json';

export const Projects = () => {
    console.log(data);
    return (
    <Wrapper> 

{data.map((item) => (
            <div key={item.title}>

            <h3>Featured Projects</h3>
          <div>
          <a
                href={data[0].Repo}
                alt='project landingpage'
                target='_blank'>
    
                <img src={data[0].Image} alt='bild' />
              </a>

           <h1>{data[0].title}</h1>
           <h5>{data[0].titleDescription}</h5>
           <p>{data[0].projectDescription}</p>
         </div>

</div>
))}
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
