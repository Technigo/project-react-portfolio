import styled from 'styled-components'

export const OuterWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
`

export const InnerWrapper = styled.div`
  width: 80vw;
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
`