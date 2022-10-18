import styled from 'styled-components';

const StyledProject = styled.article`
  margin: 1rem 0; 

  //div runt bild och overlay
  .project-image {
  align-items: center;
  color: var(--heading);
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;  
  position: relative;
  transition: 0.5s ease;
  width: 100%;
}
img {
  height: 60%;
  max-width: 500px;
  max-height: 300px;
  object-fit: cover;
  width: 100%; 
}

.project-image-overlay {
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
`

export default StyledProject;