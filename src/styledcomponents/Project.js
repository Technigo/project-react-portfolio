import styled from 'styled-components/macro'

export const ProjectGrid = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 900px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 70%;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
  @media (min-width: 2200px) {
    width: 40%;
  }
`;

export const ProjectBox = styled.div`
  background-color: white;
  display: grid;
  margin: 0 auto;
  flex-direction: column;
  width: 327px;
  height: 200px; 
  justify-content: center;
  position: relative;
  @media (min-width: 900px) {
    width: 367px;
    height: 240px;
  }
`;

export const Overlay = styled.div`
  width: 327px;
  height: 200px; 
  background: #002F33;
  display: flex;
  position: relative;
  margin: 0 auto;
  z-index: 1;
  opacity: 70%;
  
  &:hover{
    opacity: 0;
  }
  @media (min-width: 900px) {
    width: 367px;
    height: 240px;
  }
`;

export const OverlayText = styled.div` 
  color:white;
  margin: 0 auto;
  position: relative;
  top: 50%;
  font-size: 1.5rem;
  font-weight: 500;

  &:hover{
    opacity: 0;
  }
  @media (min-width: 900px) {
  }
`;

export const ProjectWrap = styled.div`
  background-color: white;
  width: 327px;
  margin: 0 auto;
  padding-bottom: 20px;
  @media (min-width: 900px) {
    width: 367px;
  }
  `;

export const ProjectTitle = styled.h2`
color: black;
text-transform: uppercase;
`;

export const ProjectDescription = styled.h3`
color: black;
line-height: 1.2rem;
`;

