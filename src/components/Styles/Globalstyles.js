import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100vw;
  min-height: 20vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
`

export const InnerWrapper = styled.div`
  width: 80vw;
  line-height: 1.3rem;
  text-align: left;

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 60vw;
  }

  @media screen and (min-width: 1024px) {
    width: 45vw;
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 10px;
 
  & img {
   height: 50px;
}
  @media screen and (min-width: 1024px) {    
    & :hover {
      opacity: 75%;
      transition: 0.3s ease;
    }
  }
`