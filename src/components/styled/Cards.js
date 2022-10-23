import styled from 'styled-components'

export const CardholderDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const CardDiv = styled.div`
  background-color: whitesmoke;
  border-radius: 1em;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.25s;
  
  @media only screen and (min-width: 600px) {
    &:hover {
    transform: translateY(-0.20em);
    cursor: pointer;
    }
  }
`

export const CardTextDiv = styled.div`
  padding: 0.5em;
  font-size: 0.9em;
  
  & p, h4 {
    margin-left: 0.3em;
  }
  
  & p {
  display: none;
  }
  
  @media only screen and (min-width: 800px) {
    & p {
      display: block;
    }   
  }
`

export const CardImage = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const TagDiv = styled.div`
  display: flex;
  justify-content: flex-start;

  & div {
    color:#000000;
    background-color:#DBE2EF;
    font-size: 0.8em;
    margin: ${(props) => (props.card ? '0.3em 0.3em 0.6em 0.6em' : '0em 1em 2em 0em')};;
    padding: 0.4em;
    border-radius: 0.7em;
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
`