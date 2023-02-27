/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const OuterWrapper = styled.div`
margin: 0px auto;
font-family: 'Roboto';
text-align: left;
width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 80%;
  padding-top: 7vh;
  padding-bottom: 7vh;
  display: flex; 
  flex-direction: column;
  @media (min-width: 668px) and (max-width: 1599px) {
    width: 70%;
  }
  @media (min-width: 1600px) {
    width: 60%;
  }
`

export const TitleContainer = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
 font-family:'Montserrat', sans-serif;
    background-color: #233126;
    color: white;
    font-size: 30px;
    align-self: center;
  justify-self: center;
  text-align: center;
  margin-bottom: 15px;
  padding: 5px;
`

export const RedTitle = styled.h1`
 font-family:'Montserrat', sans-serif;
  color: #233126;
  font-size: 24px;
  margin-top: 15px;
  font-weight:bold;
`
export const Link = styled.a`
  text-decoration: none;
  color: black;
`
export const SoMeIcons = styled.i`
display: flex;

a {
  color: white;
}
i {
  margin: 10px;
  font-size: 30px;
  text-shadow: 3px 1px 1px black;
  :hover {
    color: #233126;
    transform: scale(1.2);
  }
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 34px;
  }
  @media (min-width: 1025px){ 
    font-size: 44px;
  }
  @media (min-width: 1600px) {
    font-size: 54px;
  }
}

`

export const TagsContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
margin: 15px;
`

export const Tags = styled.span`
font-family: "Roboto", sans-serif;
  font-weight: bold;
  background-color: #D7E3DA;
  font-size: 12px; 
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
  text-transform: capitalize;
`
