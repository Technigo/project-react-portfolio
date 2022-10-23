import styled from 'styled-components/macro'

// import { GlobalStyles } from 'GlobalStyles';

import heroImage from '../images/dunes_jeremy-bishop_L.jpg'

export const HeaderContainer = styled.header`
  background-image: url(${heroImage});;
  width: 100%;
  height: 480px;
  background-position: center;
  background-size: cover;
  position: relative;
`;

// ----------------------

export const HeaderIcons = styled.div`
  position: absolute;
  /* width: 100px; */
  right: 10%;
  top: 8%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
 
a {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  transition: background-color .4s;
}  

i {
  color: var(--clr-light);
  padding: 10px; 
}

i:hover {
  color: var(--clr-lightgrey)
}

a:hover{
  background-color: var(--clr-light);
  /* color: var(--clr-lightgrey); */
}

a:visited {
  color: var(--clr-light);
  text-decoration: none;
} 

@media (min-width: 1024px) {
  right: 18%;
  top: 10%;
  font-size: 3rem;

  a {
    height: 65px;
    width: 65px;
  }
}
`;

// ----------------------

export const HeaderText = styled.div`
  position: absolute;
  font-family: var(--font-main);
  top: 33%;
  left: 12%;
  color: var(--clr-light);
  line-height: 30px;

h4 {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  text-shadow: 2px 2px 3px black;
}

h1 {
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 3px;
  line-height: 0.9em;
  margin-bottom: 0.8rem; 
}

h3 {
  font-size: 1.4rem;
  margin-left: 0.3em;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: var(--clr-lightgrey);
}

@media (min-width: 668px) {
  left: 15%;
}

@media (min-width: 1024px) {
  top: 29%;
  h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 5rem;
  }
}
`;

// ----------------------

export const ProfileImage = styled.img`
  position: absolute;
  left: 55%;
  bottom: -7%;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid var(--clr-dark);
  object-fit: cover;
  overflow: hidden;

@media (min-width: 668px) {   
  left: 60%;
  bottom: -7;
  width: 180px;
  height: 180px;
}

@media (min-width: 1024px) {
  bottom: -7%;
  left: 65%;
  width: 250px;
  height: 250px;
  border: 5px solid var(--clr-dark) ;
}
`;