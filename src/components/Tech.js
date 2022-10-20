import React from 'react';
import styled from 'styled-components';

const Tech = () => {
  return (
    <TechStyling>
      <section className="section tech">
        <h2> Tech </h2>
        <p>Learning: HTML, CSS, JavaScript, API:s, React,
        Mob- and Pair-programming, Node.js, Web accessibility,
        Flexbox, ES6, Database structures, SQL, Responsiveness.
        </p>
      </section>
    </TechStyling>)
}

export default Tech

const TechStyling = styled.section`

h2{
  text-align: center;
  margin-left: 40%;
}
`