/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const ForMoreSocialBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      width: 5rem;
      margin: 1rem;
      
      &:hover {
      opacity: 0.6;
    }
    }

    @media (min-width: 768px) {

        img {
            width: 7rem;
        }
    }

   
`