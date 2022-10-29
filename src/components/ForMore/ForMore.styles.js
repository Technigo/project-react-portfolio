/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const ForMoreSocialBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
        width: 5rem;
        margin: 1rem;
        border-radius: 50%;
        background: #eeeeee;
        opacity: 0.9;
        box-shadow: 11px 11px 21px #a19797, -11px -11px 21px #d9cdcd;
        
        &:hover {
        box-shadow: inset 11px 11px 21px #a09c9c, inset -11px -11px 21px #d8d4d4;
    }
    }

    @media (min-width: 768px) {

        img {
            width: 7rem;
        }
    }

   
`