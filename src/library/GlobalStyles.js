import styled from 'styled-components';

export const SectionHeading = styled.h2`
    background-color: #BA4581;
    color: whitesmoke;
    display: inline-block;
    padding: 4px;
    margin: 20px 0 20px 0;
    font-weight: bold;
`

export const SectionSubHeading = styled.h3`
    font-family: "Roboto";
    color: #BA4581;
    font-weight: 800;
    letter-spacing: 2px;
`

export const SectionSubSubHeading = styled.h4`
    font-family: "Roboto";
    color: #BA4581;
    font-weight: 600;
    padding-top: 10px;
`

export const OuterWrapper = styled.section`
    width: 100vw;
    padding: 2rem;
`

export const OuterWrapperGrey = styled.section`
    width: 100vw;
    padding: 2rem;
    background-color: #F8F8F8;
    ;
`
export const InnerWrapper = styled.section`
    widht: 100%;
    margin: 0 auto;
    position: relative;

    @media (min-width: 668px) {
        width: 70%;
    }
`