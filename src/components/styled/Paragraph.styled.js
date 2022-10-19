import styled from 'styled-components';

const Paragraph = styled.p`
  line-height: var(--line-height);
  margin: var(--margin);
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  width: ${(props) => (props.grid ? '100%' : 'var(--width)')};
`;

export default Paragraph;