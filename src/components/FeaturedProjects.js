import React from 'react'
import styled from 'styled-components'
import data from 'data.json';

console.log(data);

export const FeaturedProjects = () => {
  return (
    <section class="featuredProjects">
        <h2><span>Featured projects</span></h2>
        <div class="project__grid">

            <div class="project1">
                <a href="https://github.com/uohman/project-happy-thoughts">
                    
                    <div class="imageContainer">
                        <div class="project__image"><img src="./images/Happy-thoughts.png" alt="Happy thoughts image"/></div>
                        <div class="after">Happy thoughts</div>
                    </div>
                
                        
                    <div class="project__text"></div>
                        <div class="project__title">Happy thoughts</div>
                </a>
                        <div class="project__description">Site built with React where you can send happy thoughts, list all thoughts and like them.<a href="https://loquacious-kitten-5cad9c.netlify.app/"> >></a></div>
                        <div class="tag-wrapper">
                            <p>React</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
            </div>
            
            
        </div>
</section>
  )
};

const StyledSummary = styled.div`
 

h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-top: 80px; 
}

h2 span{
    background-color: #E8415E;
    padding: 2px 10px;
}
`;