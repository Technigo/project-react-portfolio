import styled from 'styled-components';

export const ArticleWrapper = styled.div`
@media (min-width: 1024px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 30px;
}`

export const Article = styled.div`
margin-top: 40px;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap; 

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 12px;;
    line-height: 12px;
    background-color: #FDDFE7;
    padding: 4px;
    margin-right: 3px;
    border-radius: 5px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`
export const ProyectsTextGroup = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 29px;
  align-items: center;
  letter-spacing: 0.01em;
  padding-top: 24px;
`
export const ImgGroup = styled.div`
position: relative;`

export const ImgCode = styled.img`
  width: 100%;
  height: 250px;
  display: inherit;
  transition: 0.5s ease;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(116, 141, 166, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
    
  &:hover {
    background-color: transparent;
}`

export const OverlayName = styled.h2`
color: black;
font-style: normal;
font-weight: bold;
font-size: 25px;
margin-bottom: 0px;

&:hover {
  color: transparent;
}  
`
