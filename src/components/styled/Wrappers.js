import styled from 'styled-components'

export const OuterWrapper = styled.section`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
padding: 1em 0em;

&:nth-of-type(2n) {
background-color: #DBE2EF;

@media only screen and (min-width: 480px) {
padding: 2em 0em;
}
`

export const InnerWrapper = styled.div`
width: 90%;
margin: 0em auto;

& p {
    margin-bottom: 1em;
  }

@media only screen and (min-width: 480px) {
width: 75%;
}
`

export const HeaderOuterWrapper = styled.header`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
padding: 2em 0em;

@media only screen and (min-width: 480px) {
padding: 2em 0em
}
`

export const FooterOuterWrapper = styled.footer`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
padding: 2em 0em;

@media only screen and (min-width: 480px) {
padding: 2em 0em
}
`
