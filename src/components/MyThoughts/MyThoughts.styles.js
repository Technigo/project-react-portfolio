/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const StyledMyThoughts = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    align-items: center;

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        width: 60%;
        align-self: center;
    }


`