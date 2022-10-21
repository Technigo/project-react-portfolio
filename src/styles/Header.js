import styled from 'styled-components'

export const Background = styled.div`
border: 2px solid yellow;
width: 100%;
height: 475px;
background-color: var(--background);
position: relative;
background-size: cover;

.header-image {
width: 100%;
height: 450px;
filter: brightness(70%); }
`

export const ProfileImage = styled.img`
position: absolute;
width: 180px;
right: 10%;
top: 300px;
border: 3px solid white;
border-radius: 50%;
`

export const HeaderText = styled.div`
border: 2px solid green;
position: absolute;
left: 10%;
top: 30%;
max-width: 200px;
color: rgb(255, 255, 255);

.name {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 4px;
  letter-spacing: 0.03em;
  width: 400px;
}

.frontend {
  font-size: 35px;
  line-height: 38px;
  font-weight: 700;
  margin: 0;
}

.designer {
  font-size: 22px;
  line-height: 40px;
  font-weight: 500;
  margin: 0;
}
`

export const IconsWrapper = styled.div`
display: flex;
width: 110px;
right: 5%;
top: 50px;
justify-content: space-between;
flex-direction: row;
position: absolute;
`

export const Icon = styled.img`
width: 50px;
`
