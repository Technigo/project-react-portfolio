/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const StyledFeaturedProjects = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-items: start;

    a {
        text-decoration: none;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
        align-items: baseline;
        grid-gap: 30px;
        justify-items: center;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

`

export const FeaturedProject = styled.article`
    position: relative;

    img {
        width: 100%;
        height: 60vw;
        object-fit: cover;
    }

    &:hover h3, &:hover p {
        text-decoration: underline;
    }
    
    @media (min-width: 768px) and (max-width: 991px) {
        img {
            height: 20vw;
        }
    }

    @media (min-width: 992px) {
        img {
            height: 20vw;
        }
    }

`

export const OverlayImage = styled.div`
    position: absolute;
    width: 100%;
    height: 60vw;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.3s ease;
    
    h2 {
        color: #ffffff;
        font-family: Montserrat;
        font-weight: 700;
        font-size: 1.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s ease;
    }

    &:hover, &:hover h2 {
        background-color: transparent;
        color: transparent;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        height: 20vw;
    }

    @media (min-width: 992px) {
        height: 20vw;
    }

`