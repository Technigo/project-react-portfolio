import styled from 'styled-components';

const SectionSubHeading = styled.h4`
  color: var(--sub-color);
  font-family: var(--main-font);
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 650px) {
    font-size: 1.1rem;
  }
`;

export default SectionSubHeading;