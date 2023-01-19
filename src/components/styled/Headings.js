import styled from 'styled-components'

export const HeaderHeading = styled.div`
  color:#F9F7F7;
  text-shadow: 2px 2px 8px #000000;
  font-family: 'Roboto', sans-serif;

  & h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  & h2 {
    font-size: 2rem;
  }
  & h2:nth-child(odd) {
    font-size: 1.5rem;
  }

@media only screen and (min-width: 60rem) {
  h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 3rem;
  }
    h2:nth-child(odd) {
      font-size: 2rem;
    }
  }
`

export const SectionHeading = styled.h3`
  border-radius: 1rem;
  margin: 0em 35% 2rem 35%;
  padding: 0.5rem;
  text-align: center;
  color: #F9F7F7;
  background-color: #112D4E;
  text-shadow: #000000 0px 0px 1px;
`

export const SubsectionHeading = styled.h3`
  margin: 2rem auto;
  padding: 0.3rem;
  text-align: center;
  color: #112D4E;
  text-decoration: underline;
`

export const InlineHeading = styled.span`
  font-size: 1.2rem;
  text-decoration: underline;
`