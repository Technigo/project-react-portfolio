import styled from 'styled-components'

export const SectionFeaturedProjects = styled.section`
border: 2px solid hotpink;
width: 100%;
height: auto;
text-align: center;
align-items: center;
`

export const Wrapper = styled.section`
display: inline-grid;
grid-gap: 10px;
width: 100%;
@media (min-width: 798px) {
grid-template-columns: repeat(2, 1fr);
}
`

export const WrapProject = styled.section`
border: 2px solid green;
width: 80%;
margin-left: 10%;
`

export const ProjectImage = styled.img`
width: 100%;
border-radius: 5px;
`
export const ProjectTitle = styled.h3`
color: #677867;
font-style: normal;
font-weight: 700;
font-size: 19px;
text-align: left;
text-transform: uppercase;
line-height: 0;
`

export const ProgramsWrapper = styled.div`
display: flex;
width: 100%;
`

export const Programs = styled.p`
font-size: 13px;
background-color: #D3E4CD;
border-radius: 5px;
padding: 4px;
margin-right: 6px;
text-transform: uppercase;
`

export const Overlay = styled.div`
width: 100%;
border-radius: 5px;
opacity: 80%;
transition: ease-in .3s;
  
  &:hover{
    opacity: 1;
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