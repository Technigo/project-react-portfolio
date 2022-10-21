import styled from 'styled-components';

/* ---section, backgrounds and general wrapper--*/
export const Section = styled.section`
  background-color: ${(props) => (props.primary ? '#7E4B48' : '#FDFBF8')};
  padding: 10px;
  padding-bottom: 15px;
`;

export const Wrapper = styled.section`
  padding: 10px;
`;

export const TextWrapper = styled.div`
padding: 20px;
`;

/* ---texts within secitons---*/
export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  text-transform: uppercase;
  padding: 10px;
  margin: 10px auto;
  margin-bottom: 20px;
  background: #7E4B48;
  border-radius: 10px;;
  color: white;

@media (min-width: 750px) {
&:hover{
  background: #2B5A71;
}
}
  
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

/* ----DECORATIONS--- */

export const Span = styled.span`
font-weight: 900;
color: #2B5A71;
`;

export const Highlight = styled.span`
  font-weight: 600;
  color: #C6F700;

  &:hover{
    color: #6583A4; 
  }
`;
