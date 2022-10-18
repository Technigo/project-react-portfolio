import styled from 'styled-components'

export const Body = styled.body`
    background-color: black;
    font-family: "Montserrat", "Roboto", sans-serif;
    margin: 0;
    width: 100%;
`

export const Link = styled.a`
    border-radius: 50%;
    border: solid white 2px;
    height: 40px;
    width: 40px;
    text-align: center;
    display: inline-block;
    transition: 0.2s;
    position: relative;
`

export const Icon = styled.svg`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `