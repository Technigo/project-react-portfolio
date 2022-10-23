import styled from 'styled-components'

export const HeaderHeading = styled.div`
  color:#F9F7F7;
  text-shadow: 2px 2px 8px #000000;
  font-family: 'Roboto', sans-serif;

  & h1 {
    font-size: 1em;
    margin-bottom: 0.5em;
  }
  & h2 {
    font-size: 2em;
  }
  & h2:nth-child(odd) {
    font-size: 1.5em;
  }

@media only screen and (min-width: 800px) {
  h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 3em;
  }
    h2:nth-child(odd) {
      font-size: 2em;
    }
  }
`

export const SectionHeading = styled.h3`
  border-radius: 1em;
  margin: 0em 35% 2em 35%;
  padding: 0.5em;
  text-align: center;
  color: #F9F7F7;
  background-color: #112D4E;
  text-shadow: #000000 0px 0px 1px;
`

export const SubsectionHeading = styled.h3`
  margin: 2em auto;
  padding: 0.3em;
  text-align: center;
  color: #112D4E;
  text-decoration: underline;
`

export const InlineHeading = styled.span`
  font-size: 1.2em;
  text-decoration: underline;
`