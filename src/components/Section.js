import styled from 'styled-components';

/* ---section, backgrounds and general wrapper--*/
export const Section = styled.section`
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
  color: var(--warmWhite);
`;

/* ----DECORATIONS--- */

export const Span = styled.span`
font-weight: 900;
color: var(--purpleHighlight);
`;

export const Highlight = styled.span`
  font-weight: 600;
  color: var(--warmWhite);
`;
