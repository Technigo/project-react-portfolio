/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const ForMoreSocialBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      width: 80px;
      margin-left: 10px;

      &:hover {
      opacity: 0.6;
    }
    }

    @media (min-width: 768px) {
        gap: 40px;

        img {
            width: 100px;
        }
    }

   
`