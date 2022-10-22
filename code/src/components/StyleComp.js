import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
`

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  background-color: #5f7161;
  display: table;
  text-align: center;
  padding: 3px 10px;
  margin: 20px auto;
  text-transform: uppercase;
  border-radius: 3px;
`
export const SectionSubTitle = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  color: #5f7161;
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
  :hover {
    opacity: 75%;
    transition: 0.3s ease;
  }
}
`