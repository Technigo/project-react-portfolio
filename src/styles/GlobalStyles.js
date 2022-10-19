import styled from 'styled-components/macro';
// STRUCTURAL STYLE-COMPONENTS (used in several sections of the page)

export const OuterWrapper = styled.section`
  background-color: ${(props) => props.backGroundcolor};
  text-align: center;
  padding-bottom: 2rem;
`

export const InnerWrapper = styled.section`
  background-color: ${(props) => props.backGroundcolor};
  width: 80%;
  margin: 0 auto;
  text-align: center;
`

export const MainHeadline = styled.h2`
  font-family: 'Montserrat, sans-serif';
  font-weight: 700;
  font-size: 1.35rem;
  line-height: 1.7rem;
  margin: 2.5rem 0;
  background-color: #BA4C08;
  padding: 2px;
  border-radius: 0.3rem;
  display: inline-block;
  width: fit-content;
  text-align: center;
  color: white;
`

export const NavBar = styled.nav`
  /*width: 30%;
  display: flex;
  justify-content: space-between;*/
  align-self: ${(props) => props.alignment};
  
  img {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
  }
  
  @media (min-width: 668px) {
    /*width: 22%;*/
    img {
      width: 5rem;
      height: 5rem;
    }
  }

  & :hover {
    transform: scale(1.1);
  }
`