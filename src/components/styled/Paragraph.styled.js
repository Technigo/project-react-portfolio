import styled from 'styled-components';

const Paragraph = styled.p`
  line-height: var(--line-height);
  margin: var(--margin);
  width: var(--width);
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

export default Paragraph;