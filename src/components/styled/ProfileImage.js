import styled from 'styled-components'

export const ProfileImage = styled.div`
  position: absolute;
  right: 5%;
  left: 60%;
  bottom: -5px;

& img {
  box-shadow: #000000 0px 5px 15px;
  max-width: 100%;
  object-fit: cover;
  display: block;
  border: 2px solid #F9F7F7;
  border-radius: 50%;
}

@media only screen and (min-width: 600px) {
  right: 5%;
  left: 70%; 
  bottom: -25px;
}

@media only screen and (min-width: 800px) {
  right: 10%;
  left: 70%; 
  bottom: -25px;
}
`