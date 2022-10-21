import styled from 'styled-components';

export const NoBackgroundH2 = styled.h2`
  background: none;
`

export const StyledTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -3px;

  span {
  background-color: var(--ligtherGreen);
  border-radius: 5px;
  color: #FFFFFF;
  font-family: "Roboto", sans-serif;
  font-size: 12px; 
  font-weight: bold;
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  text-transform: uppercase;
}
`
export const StyledRepoTag = styled.a`
p {
background-color: var(--secondary);
box-shadow: 2px 2px 2px var(--heading);
color: var(--heading);
border: 1px solid var(--heading);
border-radius: 5px;
padding: 8px;
font-family: "Roboto", sans-serif;
font-size: 12px; 
font-weight: bold;
line-height: 12px;
margin: 0.2rem 0.4rem 0.2rem 0;
text-decoration: none;
width: 12rem;
text-align: center
}
`

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 600px) {
    display: grid ;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    width: 90vw;
  }
  @media (min-width: 1200px) {
    width: 60vw;
  }
`

export const StyledListSection = styled.div`
  display: block;
  justify-self: center;
  text-align: center;
 
  ul {
  list-style-type: none;
  margin-bottom: 16px;
  }
  li {
  padding: 4px; 
  }
`
export const StyledLogo = styled.img`
height: 3rem;
margin: 0 .2rem;
width: 3rem;

@media (min-width: 1200px) {
transition: transform .5s;
transition-timing-function: linear;

&:hover {
  transform:scale(1.2);
}
}`

export const SubHeading = styled.h3`
  background: none;
  color: var(--heading);
  margin: 30px auto 20px;
  text-transform: uppercase;
`

export const LogoContainer = styled.div`
  height: 5rem;
  position: absolute;
  right: 1rem;
  top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Date = styled.p`
  color: var(--heading);
  font-size: 16px;
  margin-right: 4px;
`

export const OverlayText = styled.p`
text-transform: capitalize
`