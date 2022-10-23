import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: ${({ bg }) => (bg ? 'var(--bg-color)' : 'white')};
  padding: 3rem 0;

  & h4 {
    margin-bottom: ${({ less }) => (less && '1.4rem')};
  }
`;

export default SectionContainer;