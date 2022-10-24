import styled from 'styled-components'

const HeaderStyling = styled.header`

@font-face {
    font-family: 'Aloevera' ;
    src: url('./fonts/Aloevera-OVoWO.ttf') format('truetype');
 }

    background-color: pink;
    background: url("./images/nailpolish.jpg") no-repeat;
    background-size: 200%;
    height: 100vw;
    background-position-y: -35px;
    background-position-x: -120px;

    .logo img {
        width: 5vw;
    }

    .header-text, .social-media-links, .logo{
      background: transparent;
    }

    .social-media-links{
        display:flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 2vw;
        margin-right: 2vw;
        padding-top: 2vw;
    }

    .logo img:hover {
      width: 5.5vw;
  }



    h1{
        font-family: "Aloevera";
        color: #F6AD7B;
        font-size: 13vw;
        text-align: left;
        margin: 22vw 0vw 3vw 3vw;
    }
    
    h2{
        background-color: #F6AD7B;
        width: fit-content;
        text-align: center;
        font-family: 'Raleway Dots', cursive; 
        color: white;
        font-size: 5vw;
        margin: 2vw 0vw 2vw 3vw;
    }

    h3 {
    width: fit-content;
    text-align: center;
    font-family: 'Raleway Dots', cursive;
    color: grey;
    font-size: 4.5vw;
    margin: 0vw 0vw 2vw 3vw;
    opacity: 0.4; */
    }

    .name{
      margin-bottom: 1vw;
    }

    .description{
      mix-blend-mode: difference;
      font-size: 4vw;
    }

    .header-text{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 2px;
    }

  @media (min-width: 667px) and (max-width: 1024px){
  }
  
  @media (min-width: 1024px) {
    background-color: pink;
    background: url("./images/nailpolish.jpg") no-repeat;
    background-size: 2050px;
    height: 40vw;
    background-position-y: -440px;
    background-position-x: -120px;


  h1{
    font-size: 7vw;
    position:absolute;
    top: 15vw;
    margin: 0% 0% 0% 5%;

}
h2{
  font-size: 3vw;
  position:absolute;
  top: 25vw;
  margin: 0% 0% 0% 5%;
}
.description{
    font-size: 1.9vw;
    position:absolute;
    top: 30vw;
    margin: 0% 0% 0% 5%;
}

.name{
  font-size: 2vw;
  position:absolute;
  top: 22vw;
  margin: 0% 0% 0% 5%;
}


.logo img {
  width: 2vw;
}

.logo img:hover {
  width: 3vw;
}

.social-media-links{
  gap: 1vw;
}

    `

export default HeaderStyling
