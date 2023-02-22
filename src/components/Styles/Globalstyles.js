import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100vw;
  min-height: 25vh;
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

export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  background-color: var(--color-darkGreen);
  display: table;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-radius: 3px;
  
`
export const SectionSubTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--color-darkGreen);
  padding: 0 5px;
  margin: 40px 0 20px;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 1px #fff;
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