import styled from 'styled-components';

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: ${(props) => (props.gray ? '#F4F4F4;' : 'white')}
`

export const InnerWrapper = styled.section`
  width: 80%;
  padding-top: 7vh;
  padding-bottom: 7vh;
  display: flex; 
  flex-direction: column;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`
export const P = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 29px; 
`
export const A = styled.a`
  text-decoration: none;
  outline: none;
  color: inherit;

  &&:Hover {
    text-decoration: underline;
  }
`
export const SrOnly = styled.div`
  position: absolute;
   width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`