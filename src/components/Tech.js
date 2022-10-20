import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';

const Tech = () => {
  return (
    <TechStyling>
      <section className="section tech">
        <SectionHeaderStyling><div><h2>Tech</h2></div></SectionHeaderStyling>
        <p>Learning: HTML, CSS, JavaScript, API:s, React,
        Mob- and Pair-programming, Node.js, Web accessibility,
        Flexbox, ES6, Database structures, SQL, Responsiveness.
        </p>
      </section>
    </TechStyling>)
}

export default Tech

const TechStyling = styled.section`

`