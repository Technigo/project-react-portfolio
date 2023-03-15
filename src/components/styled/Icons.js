import styled from 'styled-components'

export const IconGroup = styled.div`
  display: flex;
  justify-content: ${(props) => (props.header ? 'flex-end' : 'center')};
`
export const SoMeIcon = styled.img`
  height: ${(props) => (props.header ? '2rem' : '3rem')};
  max-width: auto;
  margin: ${(props) => (props.header ? '0.3rem' : '1.2rem')}; 
  
  @media only screen and (min-width: 60rem) {
      height: ${(props) => (props.header ? '2rem' : '4rem')};
      margin: ${(props) => (props.header ? '0.3rem' : '1.5rem')}; 
  }
  
  @media only screen and (min-width: 80rem) {
      height: ${(props) => (props.header ? '3rem' : '4rem')};
      margin: ${(props) => (props.header ? '1rem' : '1.5rem')};
      &:hover {
        transform: translateY(-0.20rem);
        cursor: pointer;
    }
  }
`