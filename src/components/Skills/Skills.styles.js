/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    text-align: center;
    

    p {
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        color: black;
        line-height: 1.81rem;
        letter-spacing: 0.01rem;
       
    }

    @media (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 0 15%;
    }

`