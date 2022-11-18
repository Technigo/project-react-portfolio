import styled from 'styled-components';

export const ProjectGrid = styled.div`
  display: inline-grid;
  grid-gap: 10px;
  width: 100%;
  @media (min-width: 798px) {
  grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectWrap = styled.div`
 width: 337px;
 display: grid;
 padding-bottom: 20px;
 @media (min-width: 900px) {
   width: 367px;
 }
 `;

export const ProjectBox = styled.div`
  display: grid;
  margin: 0 auto;
  width: 337px;
  height: 200px;  
  @media (min-width: 900px) {
    width: 367px;
    height: 220px;
  }
`;

export const Overlay = styled.div`
  width: 337px;
  height: 200px; 
  background: #002F33;
  display: flex;
  position: relative;
  margin: 0 auto;
  z-index: 1;
  opacity: 80%;
  transition: ease-in .3s;
  
  &:hover{
    opacity: 0;
  }
  @media (min-width: 900px) {
    width: 367px;
    height: 220px;
  }
`;

export const OverlayText = styled.div` 
  color:white;
  margin: 0 auto;
  position: relative;
  top: 50%;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 600;
  &:hover{
    opacity: 0;
  }
`;

export const TitleContainer = styled.div`
margin-top: 0;
`;

export const Link = styled.a`
text-decoration: none;
`;

export const ProjectTitle = styled.h2`
color: black;
font-weight: 600;
text-transform: uppercase;

`;

export const ProjectDescription = styled.h3`
color: black;
font-weight: 400;
&:hover{
    color: #7E4B48;
}
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Tag = styled.span`
color: #fff;
background-color: #2B5A71;
border: none;
font-size: 12px;
height: 14px;
font-weight: 600;
border-radius: 5px;
padding: 5px;
&:hover{
    color: #C6F700;
}
`;