import styled, { css } from 'styled-components'

export const Button = styled.button`

background-color: blue;
border-radius: 8px;
color: white;
font-size: 30px;
padding: 8px;


&:hover {
    background-color: red;
}

${(props) => props.disabled && css`
background-color: pink;
border: 2px solid black;
color: black;

&:hover {
    background-color: green;
}
`}

`