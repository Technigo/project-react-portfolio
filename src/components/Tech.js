import React from 'react';
import styled from 'styled-components';

const Tech = () => {
  return (
    <TechSection>
      <h2>TECH</h2>
      <p>HTML, CSS, Flexbox, JavaScript, React, API:s, mob-programming,
         pair-programming, Github.
      </p>
    </TechSection>
  )
};

export default Tech;

const TechSection = styled.div`
margin: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
h2 {
  background: salmon;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 17px;
}
`;