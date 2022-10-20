import styled from 'styled-components';

export const TechStack = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 1em;
margin: 1em 0em;

& img {
height: 50px;
width: auto;
}

@media only screen and (min-width: 480px) {
grid-template-columns: repeat(6, 1fr);
}

@media only screen and (min-width: 770px) {
grid-template-columns: repeat(9, 1fr);
}
`