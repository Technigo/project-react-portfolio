import React from "react";
import styled from 'styled-components'

export const GlobalStyling = styled.div`
background: ${(props) => (props.secondary ? '#c5c0b173' : "#e6e0d4 ")} ;
border: 5px solid black;
 @media screen and (min-width: 1024px) {

    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.75rem;
    }

    p {
        padding: 10px;
        font-size: 1.7rem;
    }

    li {
        font-size: 1.5rem;
    }
 }
`
export const TitleBarStyling = styled.div`
 @media screen and (min-width: 1024px) {
    margin: 50px;
    width: 25%;
    margin-left: 600px;
    border-bottom: solid black;
 }


`