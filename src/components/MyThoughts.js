
import React from 'react';
import styled from 'styled-components';

export const MyThoughts = () => {
  return (
    <StyledMyThought className="thought">
      <a
        href="https://medium.com/@wilbik.kaja/my-journey-from-the-travel-industry-to-tech-in-22-weeks-after-8-weeks-eb84a8b1cacf"
        target="_blank"
        rel="noreferrer">
        <img
          src="https://c.pxhere.com/photos/ba/8e/iceland_366photos_plpconnectu-237666.jpg!d"
          srcSet="https://c.pxhere.com/photos/ba/8e/iceland_366photos_plpconnectu-237666.jpg!d"
          alt="table, black and white, technology, white, iceland, black, monochrome, plpconnectu, 366photos, computer monitor, monochrome photography, display device, Free Images In PxHere" />

        <h3> My journey from the travel industry to tech in 22 weeks</h3>
      </a>
    </StyledMyThought>

  )
}

const StyledMyThought = styled.div`
margin: 20px;
display: flex;
flex-direction:column;
align-items: center;
text-align: center;

img {
  width:200px;
  height: 200px;
}

a{
    text-decoration: none;
    color: black;
}

a:hover {
    color: violet;
}

h3 {
    font-size: 20px;
}

`