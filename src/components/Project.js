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
  background: var(--steelBlue);
  border-radius: 20px;
  display: flex;
  position: relative;
  margin: 0 auto;
  z-index: 1;
  opacity: 90%;
  transition: ease-in  .5s;
  
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
color: var(--darkChocolate);
font-weight: 600;
text-transform: uppercase;

`;

export const ProjectDescription = styled.h3`
color: black;
font-weight: 400;
&:hover{
    color: var(--purpleHighlight);
}
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Tag = styled.span`
color: white;
background-color: var(--steelBlue);
border: none;
font-size: 12px;
height: 14px;
font-weight: 600;
border-radius: 5px;
padding: 5px;
`;