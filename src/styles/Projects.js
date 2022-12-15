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
max-width: 1000px;
display: grid;
grid-gap: 10px;
@media (min-width: 800px) {
grid-template-columns: repeat(2, 1fr);
width: 60%;
justify-content: center;
}
`

export const OtherProjectsWrapper = styled(Wrapper)`
justify-content: center;
width: 80%;
@media (min-width: 800px) {
grid-template-columns: 1fr;
justify-content: center;
}
`

export const ProjectTitle = styled.h3`
line-height: 0px;
color: #677867;
font-style: normal;
font-weight: 700;
font-size: 19px;
text-transform: uppercase;
&:hover {
  cursor: pointer;
  transform: scale(1.03);
}
`
export const Icon = styled.img`
    margin-top: 10px;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    &:hover {
  cursor: pointer;
  transform: scale(1.03);
}
`

export const WrapProject = styled.section`
position: relative;
width: 320px;
height: 375px;
margin-bottom: 10px;
@media (min-width: 800px) {
    margin-left: 10%;
    min-width: 400px;
    max-width: 450px;
    height: 410px;
    margin-bottom: 15px;
    }
`

export const WrapOtherProject = styled.div`
position: relative;
margin-bottom: 5px;
width: 100%;
height: auto;
@media (min-width: 800px) {
    }
`

export const ProjectImage = styled.img`
width: 320px;
height: 200px;
margin: 0 auto;
border-radius: 5px;
position: absolut;
overflow: hidden;
display: block;
@media (min-width: 800px) {
  width: 100%;
  height: 230px;
  }
&:hover {
  cursor: pointer;
}
`

export const Overlay = styled.div`
position: absolute;
display: flex;
justify-content: center;
width: 320px;
height: 200px;
margin: 0 auto;
border-radius: 5px;
background: rgb(196, 187, 176);
transition: all 0.3s ease-in-out;
@media (min-width: 800px) {
  width: 100%;
  height: 230px;
  }
p {
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  line-height: 0;
  position: absolute; 
  top: 40%; 
}
&:hover {
  opacity: 0;
}
`

export const ProgramsWrapper = styled.div`
display: flex;
position: absolute;
bottom: 0;
width: 100%;
`
export const OtherProgramsWrapper = styled(ProgramsWrapper)`
display: flex;
position: relative;
bottom: 0;
width: 100%;
`

export const Programs = styled.p`
font-size: 13px;
background-color: #D3E4CD;
padding: 4px;
margin-right: 6px;
text-transform: uppercase;
`