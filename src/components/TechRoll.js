import React from 'react';
import styled from 'styled-components';

export const TechWrapper = styled.div`
margin:0;
width: 100%;
color: black;
display: flex;
align-items: center;
flex-direction: column;

@media (min-width: 1024px){
    height: 260px;
  }
}
`;

const TechHeader = styled.h2`
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 15px;

  @media (max-width: 1023px) {
    font-size: 22px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
     margin-top: 20px;
  }
`;

export const ScrollLeftWrapper = styled.div`
width: 100%;
padding: 10px 0;
`;

export const TechContent = styled.p`
    width: 100%;
    line-height: 50px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inherit;
    /* Starting position */
    -moz-transform:translateX(100%);
    -webkit-transform:translateX(100%); 
    transform:translateX(100%);
    /* Apply animation to this element */ 
    -moz-animation: scroll-left 20s linear infinite;
    -webkit-animation: scroll-left 20s linear infinite;
    animation: scroll-left 20s linear infinite;
    }
    /* Move it (define the animation) */
    @-moz-keyframes scroll-left {
    0% { -moz-transform: translateX(100%); }
    100% { -moz-transform: translateX(-100%); }
    }
    @-webkit-keyframes scroll-left {
    0% { -webkit-transform: translateX(100%); }
    100% { -webkit-transform: translateX(-100%); }
    }
    @keyframes scroll-left {
    0% { 
    -moz-transform: translateX(100%); /* Browser bug fix */
    -webkit-transform: translateX(100%); /* Browser bug fix */
    transform: translateX(100%); 
    }
    100% { 
    -moz-transform: translateX(-100%); /* Browser bug fix */
    -webkit-transform: translateX(-100%); /* Browser bug fix */
    transform: translateX(-100%); 
    }
    }}

@media (min-width: 668px) and (max-width: 1023px){
    width:70%;
    margin-top: 30px;

    img{
        height: 65px
    }
}

@media (min-width: 1024px)
    width:50%;

  img{
  height: 75px;  
  }
}
`;

export const Tech = ({ color }) => {
  return (
    <TechWrapper>
      <TechHeader color={color}>TECH</TechHeader>
      <ScrollLeftWrapper>
        <TechContent className="ScrollLeft">
     HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </TechContent>
      </ScrollLeftWrapper>
    </TechWrapper>
  );
};