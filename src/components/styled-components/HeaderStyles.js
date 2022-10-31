import styled from 'styled-components';
import { Container } from './GlobalStyles';

export const HeaderContainer = styled(Container)`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;`

export const IconsHeader = styled.div`
position: absolute;
right: 24px;
top: 48px;

& img {
    color: black;
}

& @media (min-width: 1024px){
    right: 0px;
}
`
export const Profile = styled.img`
position: absolute;
right: 0px;
bottom: -16px;
width: 180px;
height: 180px;
border-radius: 50%;
border: 2px solid #555;
background-color: white;
object-fit: cover;

& @media (min-width: 1024px){
    right: 0px;
}`

export const HeaderText = styled.div`
position: absolute;
color:  #FFFFFF;
font-family: 'Cabin', sans-serif;
letter-spacing: 0.04em;
line-height: 50px;

h5 {
    display: inline;
    font-weight: 600;
    color: black;
    text-shadow: 0 0 3px white;
}

h1 {
    color: black;
    text-shadow: 0 0 3px white;
    font-size: 40px;
    font-weight: bolder;
    margin-right: 131px;
    line-height: 50px;
}

p {
    color: black;
    text-shadow: 0 0 3px white;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.08em;
}

span{
    font-weight: 500;
}

@media(min-width: 1024px){
    line-height: 60px;

    p {
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 0.08em;
    }

    h1 {
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 0.08em;
        line-height: 60px;
    }
}

`