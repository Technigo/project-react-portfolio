import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  

`;

// section
export const SectionWrapper = styled.section`
  display: block;
  background: ${(props) => (props.bgColor || 'var(--clr-white)')};
  /* border: 2px solid yellowgreen; */

`;

// Container
export const ContainerWrapper = styled.div`
  margin: 0;
  padding: 0 1.5em 2.5em;
  display: flex;
  justify-content: center;
  /* border: 2px solid green; */
`;

// flex
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  /* border: 2px solid orange; */

  @media (min-width: 1100px) {
      width: 80%;
    
  }
`;

export const SectionHeadings = styled.h2`
    font-weight: 700;
    font-size: 20px;
    
    line-height: 1.2em;
    text-transform: uppercase;
    color: var(--clr-white);
    background-color: var(--clr-dark);
    border-radius: 3px;
    display: flex;
    align-self: center;
    margin: 2em 0 2em;
    padding: 0.5em 1em;
   
`;

// -------------gradient bg form skills throug ForMore to the footer
export const SectionWrapperGradiant = styled.section`
  display: block;
  width: 100%;
  padding-bottom: 2em;
  margin-bottom: -27px;
  background: linear-gradient(180deg, rgba(248,233,240,0.1) 6%, rgba(245,201,245,0.96) 30%, rgba(61,53,61,1) 76%, rgba(17,17,17,0.98) 90%, rgba(23,23,23,0.7) 100%);
  
`;

/* INTRO  */
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
`;

/* TECH SKILLS  */
export const TextSection = styled(Text)`
 text-align: center;

  @media (min-width: 668px) {
    padding: 0% 8%;
  }

  @media (min-width: 1024px) {
    padding: 0% 15%;
    /* max-width: 1000px; */
  } 
`;
