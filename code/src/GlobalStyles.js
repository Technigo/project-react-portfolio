import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  

`;

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.5em 2.5em;
  border: 2px solid green;
`;

// flex
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: ${(props) => (props.bgSectionEven ? 'var(--clr-white)' : 'var(--clr-section)')};
  border: 2px solid orange;
/* 
  @media (min-width: 600px) and (max-width: 1023px){
    padding: 8% 10%;
  }

  @media (min-width: 1024px){
    padding: 5% 10%;
  } */
`;
