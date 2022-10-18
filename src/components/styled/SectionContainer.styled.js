import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: ${(props) => (props.bg ? 'var(--bg-color)' : 'white')};
  padding: 3rem 0;
`;

export default SectionContainer;