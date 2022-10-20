/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const StyledFeaturedProjects = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-items: center;

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
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

export const FeaturedProjectOverlay = styled.div`
    position: relative;

    img {
        width: 100%;
        height: 60vw;
        object-fit: cover;

        &:hover {
        background-color: transparent;
    }
    }


    p {
        color: #ffffff;
        font-family: Montserrat;
        font-weight: 700;
        font-size: 1.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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

export const OverlayImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.3s ease;

    @media (min-width: 768px) and (max-width: 991px) {
        height: 20vw;
    }

    @media (min-width: 992px) {
        height: 20vw;
    }

`