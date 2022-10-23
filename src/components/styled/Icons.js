import styled from 'styled-components'

export const IconGroup = styled.div`
  display: flex;
  justify-content: ${(props) => (props.header ? 'flex-end' : 'center')};
`

export const SoMeIcon = styled.img`
  height: ${(props) => (props.header ? '30px' : '50px')};
  max-width: auto;
  margin: ${(props) => (props.header ? '0.3em' : '1.2em')}; 
  
  @media only screen and (min-width: 600px) {
      height: ${(props) => (props.header ? '30px' : '100px')};
      margin: ${(props) => (props.header ? '0.3em' : '1.5em')}; 
  }
  
  @media only screen and (min-width: 800px) {
      height: ${(props) => (props.header ? '50px' : '100px')};
      margin: ${(props) => (props.header ? '1em' : '1.5em')};
      &:hover {
        transform: translateY(-0.20em);
        cursor: pointer;
    }
  }
`