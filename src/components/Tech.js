import React from 'react';
import styled from 'styled-components';

const Tech = () => {
    return (
        <TechSection>
            <Header>
                <h1>Tech</h1>
            </Header>
            <TechText>
                <p>
                HTML, CSS, Flexbox, JavaScript, ES6, JSX,React, React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s,mob-programming, pair-programming, Github.  
                </p>
            </TechText>
        </TechSection>
    )
}

const TechSection = styled.div`
display: flex;
flex-direction: column;
`

const Header = styled.h1`
font-size: 30px;
`
const TechText = styled.p`
font-size: 18px;
`
export default Tech;