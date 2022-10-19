/* eslint-disable linebreak-style */
import styled from 'styled-components'

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

    h4 {
        font-family: Roboto;
        font-size: 1.2em;
        font-weight: 700;
        line-height: 1.2em;
        color: black;
    }

    img {
        width: 100%;
    }

    p {
        font-family: 'Roboto';
        line-height: 1.81em;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0.01em;
        color: black;
        font-size: 1.1em;
    }

    @media (min-width: 768px) {
        width: 60%;
        align-self: center;
    }


`