/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    text-align: center;
    font-family: 'Roboto';

    p {
        line-height: 1.81rem;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0.01rem;
        color: black;
        font-size: 1rem;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`