import styled from 'styled-components'

export const SocMediaContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  img {
    width: 10vw;

    @media (min-width: 668px) and (max-width: 1024px){
      width: 7vw;
    }

    @media (min-width: 1025px) {
      width: 5vw;
  }
  &:hover {
    transform: scale(1.1)
  }
  }
  `