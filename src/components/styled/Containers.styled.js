import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: ${({ bg }) => (bg ? 'var(--bg-color)' : 'white')};
  padding: 3rem 0;

  & h4 {
    margin-bottom: ${({ less }) => (less && '1.6rem')};
  }
`;

export const ArticleContainer = styled.article`
  display: grid;
  grid: 1fr;
  ${({ other }) => (other && { margin: 'var(--margin)', width: 'var(--width)' })};

    & h5 {
      margin-bottom: 0.1rem;
    }
`;

export const ProjectImage = styled.div`
  background-size: cover;
  aspect-ratio: 1.5 / 1;
  box-shadow: 3px 3px var(--third-color);
  margin-bottom: 0.6rem;

    & div {
      background-color: #8088ffcd;
      height: 100%;
      transition: all 0.5s;
      text-align: center;
    }
    
    @media (min-width: 768px) {
      &:hover div {
        opacity: 0;
      }
    }
`

export const ThoughtsImage = styled(ProjectImage)`
  box-shadow: 3px 3px var(--main-color);

   & div {
    background-color: #a3a3a3be;
   }
`;