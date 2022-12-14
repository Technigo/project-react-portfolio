import React from 'react';
import styled from 'styled-components';

export const TechRoll = ({ color }) => {
  return (
    <TechWrapper>
      <TechHeader color={color}>TECH</TechHeader>
      <ScrollWrapper>
        <ScrollContent className="ScrollLeft">
     HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </ScrollContent>
      </ScrollWrapper>
    </TechWrapper>
  );
};

export const TechWrapper = styled.div`
margin:0;
width: 100%;
color: black;
display: flex;
align-items: center;
flex-direction: column;

@media (min-width: 1024px){
  }
`;

const TechHeader = styled.h2`
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 15px;
  margin-bottom:0;
  margin-top:40px;

  @media (max-width: 1023px) {
    font-size: 22px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
     margin-top: 60px;
  }
`;

export const ScrollWrapper = styled.div`
width: 100%;
display: flex;
`;

export const ScrollContent = styled.p`
    width: 100%;
    line-height: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inherit;
    font-size:17px;
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
    }
  }

@media (min-width: 668px) and (max-width: 1023px){
    {
      font-size:17px;
    }
}

@media (min-width: 1024px)
  {
    font-size:30px;
    line-height: 80px;
  }
}
`;