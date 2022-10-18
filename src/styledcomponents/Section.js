import styled from 'styled-components/macro'

/* ---section, backgrounds and general wrapper--*/
export const Section = styled.section`
  background-color: ${(props) => (props.primary ? 'pink' : 'red')};
  padding: 10px;
`;

export const Wrapper = styled.section`
  padding: 10px;
  background-color: green;
`;

export const TextWrapper = styled.div`
padding: 20px;
background-color: antiquewhite;
`;
/* ---texts within secitons---*/
export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  text-transform: uppercase;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  background: grey;
  color: white;
`;

export const SubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  text-transform: uppercase;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  color: black;
`;