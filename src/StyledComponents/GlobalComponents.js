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
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1025px){ 
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
    background-color: #FA382F;
    color: white;
    font-size: 30px;
    align-self: center;
  justify-self: center;
  text-align: center;
  margin-bottom: 15px;
`

export const RedTitle = styled.h1`
 font-family:'Montserrat', sans-serif;
  color: red;
  font-size: 24px;
  margin-top: 15px;
`
export const Link = styled.a`
  text-decoration: none;
  color: black;
`
export const SoMeIcons = styled.i`
color: white;
display: flex;
i {
  margin: 5px;
  font-size: 24px;
}
`

export const TagsContainer = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   
`

export const Tags = styled.div`
font-family: "Roboto", sans-serif;
  font-weight: bold;
  background-color: #FDDFE7;
  font-size: 12px; 
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
  text-transform: capitalize;
`
