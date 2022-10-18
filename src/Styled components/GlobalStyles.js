import styled from 'styled-components';

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
`

export const InnerWrapper = styled.section`
  width: 80%;
  background-color: ${(props) => (props.gray ? '#F4F4F4;' : 'white')}
`
