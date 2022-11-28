import styled from 'styled-components';

export const SectionHeading = styled.h2`
    background-color: #BA4581;
    color: whitesmoke;
    display: inline-block;
    padding: 4px;
    margin: 20px 0 20px 0;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`

export const SectionSubHeading = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: #BA4581;
    font-weight: 800;
    padding-top: 10px;
`
// letter-spacing: 2px;
export const SectionSubSubHeading = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: #BA4581;
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
    widht: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.3rem;

    @media (min-width: 668px) {
        width: 70%;
    }

    @media (min-width: 1350px) {
        width: 55%;
    }
`