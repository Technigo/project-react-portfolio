import React from 'react';
import styled from 'styled-components';

export const Tags = ({ name, nameTwo, nameThree }) => {
  return (
    <StyledTags>
      <p>{name}</p>
      <p>{nameTwo}</p>
      <p>{nameThree}</p>
    </StyledTags>

  )
}

const StyledTags = styled.p`

    display:flex;
    padding-bottom: 5px;
    
p {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    background-color: #7b9f9b;
    text-decoration: none;
    /* Matching line-height and font-size here gives full control 
       over the size of our tags to the padding*/
       font-size: 12px; 
      line-height: 12px;
  
      /* Control the size of the tags */
      padding: 4px;
  
      /* Control the spacing of our tags */
      margin: 3px;
  
      /* Some rounded borders */
      border-radius: 5px;
   }
   `