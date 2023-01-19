import styled from 'styled-components'

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0rem;
  
  &:nth-of-type(2n) {
  background-color: #DBE2EF;
  }

  @media only screen and (min-width: 60rem) {
  padding: 2rem 0rem;
  }
`

export const InnerWrapper = styled.div`
  width: 90%;
  margin: 0rem auto;
  
  & p {
    margin: ${(props) => (props.centertext ? '0rem auto' : '')};
    padding-bottom: 1rem;
    max-width: 640px;
  }

  @media only screen and (min-width: 60rem) {
  width: 75%;
  }
`

export const HeaderOuterWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 0rem;
  background-image: url(images/background-image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;

  @media only screen and (min-width: 60rem) {
  padding: 2rem 0rem
  }
`

export const FooterOuterWrapper = styled.footer`
  width: 100%;
  background-color: #112D4E;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #F9F7F7;
  text-align: center;
  text-shadow: #000000 0px 0px 1px;
  padding: 2rem 0rem;

  & div p {
    margin-top: 1rem;
  }
`