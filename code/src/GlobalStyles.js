import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  

`;

// section
export const SectionWrapper = styled.section`
  display: block;
  /* height: 100%; */
  background: ${(props) => (props.bgColor || 'var(--clr-white)')};
  border: 2px solid yellowgreen;

`;

// Container
export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.5em 2.5em;
  border: 2px solid green;
`;

// flex
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid orange;
`;

export const SectionHeadings = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2em;
    color: var(--clr-white);
    background-color: var(--clr-dark);
    border-radius: 3px;
    display: inline-block;
    align-self: center;
    margin: 5% 0 5%;
    padding: 0.5rem 1rem;
`;

/* INTRO and TECH */
export const Text = styled.p`
  /* color: ${(props) => (props.color || 'black')}; */
  font-family: var(--font-second);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7em;
  

  @media (min-width: 1024px) {
      font-size: 1.1rem;
      /* width: 80%;
      align-content: center; */
     
  }

 `
