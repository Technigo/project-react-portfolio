import styled from 'styled-components/macro';

export const SectionHeading = styled.h2`
    background-color: var(--color-darkGreen);
    color: whitesmoke;
    display: inline-block;
    padding: 0 15px;
    margin: 20px 0 20px 0;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`

export const SectionSubHeading = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: var(--color-eggplantPink);
    font-weight: 800;
    padding-top: 10px;
`
// letter-spacing: 2px;
export const SectionSubSubHeading = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: var(--color-eggplantPink);
    font-weight: 600;
    padding-top: 10px;
`

export const BodyText = styled.p`
  font-family: 'Montserrat', sans-serif;
`

export const OuterWrapper = styled.section`
    width: 100%;
    padding: 2rem 0 2rem 0;
`

export const OuterWrapperGrey = styled.section`
    width: 100%;
    padding: 2rem 0 2rem 0;
    background-color: #F8F8F8;
    ;
`
export const InnerWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.6;

    @media (min-width: 668px) {
        width: 60%;
    }

    @media (min-width: 1350px) {
        width: 55%;
    }
`

export const GridWrapper = styled.div`
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-bottom: 20px;

    @media (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        margin-bottom: 50px;
    }
`;

export const ProjectTags = styled.p`
    font-family: "Roboto", sans-serif;
    color: black;
    padding: 5px 10px;
    background-color: var(--color-lightGreen);
    display: inline;
    font-size: 0.8rem;
    margin: 0 6px 6px 0;
`;

export const TagWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap;
`;

export const Span = styled.span`
  color: var(--color-eggplantPink);
`;