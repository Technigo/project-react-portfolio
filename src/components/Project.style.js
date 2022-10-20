import styled from 'styled-components';

const StyledProject = styled.div`
  margin: 1rem 0; 

  h3, h4 {
  background-color: transparent;
  color: var(--heading);
  display: inline;
  font-size: 17px;
  margin: 20px 0 15px;
  padding-left: 0;
  text-transform: uppercase;
}

@media (min-width: 1200px) {
  transition: transform .5s;
  transition-timing-function: linear;
  background-color: transparent;
  
  &:hover {
      transform: scale(1.1);
  }
}
`

export default StyledProject;

export const ImageContainerWithOverlay = styled.div`
  align-items: center;
  color: var(--heading);
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;  
  position: relative;
  transition: 0.5s ease;
  width: 100%;

img {
 
  max-width: 500px;
  max-height: 300px;
  object-fit: cover;
  width: 100%; 
  aspect-ratio: 1.6/1;

}

div {
  background-color: rgba(237, 230, 219, 0.5);
  height: 100%;
  position: absolute;
  transition: 0.5s ease;
  width: 100%;
}
.overlay-text {
  font-size: 2rem;
  font-weight: 400;
  position: absolute; 
}

@media (min-width: 1200px) {
    &:hover {
    color: transparent;
    }

  .project-image-overlay {
    &:hover{
      background-color: transparent;
    }
  }
}
`