import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: ${({ main }) => (main ? 'var(--main-font)' : 'var(--sub-font)')};
  line-height: var(--line-height);
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  transition: all .3s ease;

  ${({ grid }) => (grid
    ? { margin: '0', width: '95%' }
    : { margin: 'var(--margin)', width: 'var(--width)' })};
`;

export default Paragraph;