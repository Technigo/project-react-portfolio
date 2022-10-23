import styled from 'styled-components'

export const SectionFeaturedProjects = styled.section`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
`

export const Wrapper = styled.section`
border: 4px solid orange;
width: 80%;
display: inline-grid;
grid-gap: 10px;
@media (min-width: 800px) {
grid-template-columns: repeat(2, 1fr);
width: 60%;
}
`

export const WrapProject = styled.section`
border: 2px solid hotpink;
width: 100%;
align-item: start;
margin-bottom: 10px;
@media (min-width: 800px) {
    min-width: 300px;
    max-width: 350px;
    max-height: 400px;
    }
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

export const ProjectImage = styled.img`
position: absolut;
width: 100%;
padding-top: 0px;
border-radius: 5px;
display: block;
@media (min-width: 800px) {
  width: 100%;
  height: 200px;
  }
`

export const Overlay = styled.div`
position: absolut;
width: 100%;
padding-top: 0px;
border-radius: 5px;
position: relative;
opacity: 80%;
transition: ease-in .3s;
background: pink;
display: block;

@media (min-width: 800px) {
  width: 100%;
  height: 200px;
  } 
&:hover{
  opacity: 0;
}
`;

export const OverlayText = styled.h3` 
color:white;
margin: 0 auto;
position: relative;
top: 50%;
font-size: 1.5rem;
font-weight: 500;
text-transform: uppercase;
font-weight: 600;
a:link {
  text-decoration: none;
}
&:hover{
  opacity: 0;
}
`;

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