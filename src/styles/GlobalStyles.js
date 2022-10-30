import styled from 'styled-components/macro';

/* Remember = styled.item/section/h */

export const OuterWrapper = styled.section`
    background-color: var(--main-bg-color);
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerWrapper = styled.div`
    background-color: var(--main-bg-color);
    width: 80%;
    padding-top: 3rem;
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
    font-size: 1.1rem;
    font-weight: 400;
`;

export const LargeHeadline = styled.h1`
    font-family: 'Montserrat';
    font-size: 1,5rem;
    font-weight: 700;

`;

export const Image = styled.img`
  width: 100%;
  height: 375px;

`
export const MediumHeadline = styled.div`
    background-color: var(--third-bg-color);
    color: #F9FCFB;
    font-family: 'Montserrat';
    font-size: 1,5rem;
    font-weight: 700;
`

/* If this is not needed remove */
export const SmallHeadline = styled.h2`
    font-family: 'Montserrat';
    color: blue;

`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-top: 1rem;
    text-decoration: none;
    text-align: left;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  
`;

export const Tag = styled.span`
    background-color: #7BC224;
    font-family: 'Roboto';
    font-weight: 700;
    text-decoration: none;
    color: #585B58;
    line-height: 1rem;
    border-radius: 5px;
    margin: 0.2rem;
    padding: 0.1rem;
 
`;