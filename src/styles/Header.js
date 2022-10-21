import styled from 'styled-components'

export const Background = styled.div`
width: 100%;
background-color: var(--background);
position: relative;
background-size: cover;
margin-bottom: 20px;

.header-image {
width: 100%;
height: 400px;
filter: brightness(70%); 
}
`

export const ProfileImage = styled.img`
position: absolute;
width: 180px;
right: 10%;
top: 240px;
border: 3px solid white;
border-radius: 50%;
@media (min-width: 798px) {
  right: 20%;
  top: 200px;
  width: 220px
  }
`

export const HeaderText = styled.div`
position: absolute;
left: 10%;
top: 30%;
max-width: 200px;
color: rgb(255, 255, 255);
@media (min-width: 798px) {
  max-width: 300px;
  left: 20%;
  }
`

export const Name = styled.h2`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 4px;
  letter-spacing: 0.03em;
  width: 400px;
  @media (min-width: 798px) {
    font-size:17px
    }
`

export const Frontend = styled.h1`
  font-size: 35px;
  line-height: 30px;
  font-weight: 700;
  margin: 0;
  @media (min-width: 798px) {
    font-size:40px
    }
`

export const Designer = styled.h2`
  font-size: 22px;
  line-height: 40px;
  font-weight: 500;
  margin: 0;
  @media (min-width: 798px) {
    font-size:28px
    }
`

export const IconsWrapper = styled.div`
display: flex;
width: 110px;
right: 10%;
top: 50px;
justify-content: space-between;
flex-direction: row;
position: absolute;
@media (min-width: 798px) {
  right: 20%;
  }
`

export const Icon = styled.img`
width: 50px;
`
