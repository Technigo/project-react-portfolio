import styled from 'styled-components';
import { woods } from '../assets/woods.jpg'
/* export const NavBar

Remember = styled.item/section/h

*/

export const NavBar = styled.div`
    background-color: magenta;
`;

export const OuterWrapper = styled.section`
    background-color: whitesmoke;

`

export const HeaderBackground = styled.div`
    width: 100vw;
    background-image: ${woods};
    background-repeat: no-repeat;
    background-size: cover;

`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const InnerWrapper = styled.div`
    background-color: hotpink;

`;

export const Paragraph = styled.p`
    font-family: 'Montserrat';
    font-size: 1rem;
`;

export const LargeHeadline = styled.h1`
    font-family: 'Montserrat';
    font-size: 1,5rem;
    font-weight: 700;

`;

export const SmallHeadline = styled.h2`



`;