import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${(props) => (props.color ? 'white' : 'black')};
  line-height: 25px;
  margin: 0 auto;
  width: 40rem;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  
  @media (max-width: 1200px) {
    width: 33rem;
  }

  @media (max-width: 650px) {
    width: 22rem;
  }
`;

export default Paragraph;