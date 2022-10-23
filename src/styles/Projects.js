import styled from 'styled-components'

export const SectionProjects = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
`

export const Wrapper = styled.section`
justify-content: center;
width: 80%;
display: inline-grid;
grid-gap: 10px;
@media (min-width: 800px) {
grid-template-columns: repeat(2, 1fr);
width: 60%;
}
`

export const OtherProjectsWrapper = styled(Wrapper)`
justify-content: center;
@media (min-width: 800px) {
grid-template-columns: 1fr;
width: 60%;
justify-content: center;
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

export const WrapProject = styled.section`
width: 350px;
height: auto;
margin-bottom: 10px;
@media (min-width: 800px) {
    min-width: 300px;
    max-width: 350px;
    height: auto;
    }
`

export const WrapOtherProject = styled(WrapProject)`
width: auto;
justify-content: center;
@media (min-width: 800px) {
    max-width: auto;
    }
`

export const ProjectImage = styled.img`
width: 350px;
height: 200px;
margin: 0 auto;
border-radius: 5px;
position: absolut;
overflow: hidden;
display: block;
@media (min-width: 800px) {
  width: 100%;
  height: 200px;
  }
`

export const Overlay = styled.div`
position: absolute;
display: flex;
justify-content: center;
width: 350px;
height: 200px;
margin: 0 auto;
border-radius: 5px;
background: rgb(196, 187, 176);
opacity: 0.7;
transition: all 0.3s ease-in-out;
p {
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  text-transform: uppercase;
  line-height: 0;
  color: white;
  position: absolute; 
  top: 40%; 
  @media (max-width: 690px) {
    font-size: 25px;
  }
}
&:hover {
  opacity: 0;
}
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