import styled from 'styled-components';

/* Remember = styled.item/section/h */

export const NavBar = styled.div`
    background-color: magenta;
    display: flex;
    align-self: flex-end;
    padding: 1rem;
`;

export const OuterWrapper = styled.section`
    background-color: blue;
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

export const InnerWrapper = styled.div`
    background-color: yellow;
    width: 80%;

`;

/* export const HeaderBackground = styled.div`
    width: 100vw;
    background-image: ${woods};
    /*background-repeat: no-repeat;
    object-fit: cover;

`; */

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
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

export const Image = styled.img`
  width: 100%;
`

export const SmallHeadline = styled.h2`
    font-family: 'Montserrat';
    color: blue;

`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: green;
  border-radius: 5px;
`;