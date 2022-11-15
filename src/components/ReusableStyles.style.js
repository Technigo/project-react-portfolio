import styled from 'styled-components/macro';

export const NoBackgroundH2 = styled.h2`
  background: none;
`
export const DarkerContainer = styled.section`
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
`

export const StyledTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -3px;

  span {
  background-color: var(--ligtherGreen);
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
  max-width: 1100px;
  
  @media (min-width: 600px) {
    display: grid ;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    width: 80vw;
  }
  @media (min-width: 992px) {
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

export const LogoContainer = styled.div`
  height: 5rem;
  position: absolute;
  right: 1rem;
  top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .for-more {
    height: 48px;
    filter: invert(13%) sepia(18%) saturate(351%) hue-rotate(149deg) brightness(20%) contrast(95%);
    margin: 0 .5rem;
    width: 48px;

    @media (min-width: 600px) {
      height: 4rem;
      width: 4rem;
    }
  }
`

export const SubHeading = styled.h3`
  background: none;
  color: var(--heading);
  margin: 30px auto 20px;
  text-transform: uppercase;
`

export const Date = styled.p`
  color: var(--heading);
  font-size: 16px;
  margin-right: 4px;
  display: block;
`

export const StyledOther = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  max-width: 1100px;

  h3 {
  font-size: 17px;
  font-weight: 700;
  padding-left: 0;
  text-transform: uppercase;
  background: none;
  color: var(--heading);
  margin: 30px auto 20px;
}
@media (min-width: 600px) {
  justify-content: left; 
  width: 80vw;
}
@media (min-width: 992px) {
  width: 60vw;
}
`
export const StyledOtherLinkWrapper = styled.a`
  p {
    color: var(--heading);
    font-size: 16px;
    margin-right: 4px;
    text-decoration: underline;
  }
`
export const OverlayText = styled.p`
text-transform: capitalize;
  font-size: 24px !important;
  font-weight: 400;
  position: absolute; 
  text-align: center;
`
export const ContentWrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    width: 80vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }
`