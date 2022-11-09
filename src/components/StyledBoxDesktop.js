import React from "react";
import styled from 'styled-components'


 export const StyledBoxDesktop = styled.div `
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}


`