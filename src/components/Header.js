import React from 'react'
import styled from 'styled-components'
import img from 'images/Portfolio-image.jpg'
import backgroundImg from 'images/Header-image.jpg'

export const Header = ({ name, title, titleTwo }) => {
  name = 'Portfolio: Ulrika Öhman';
  title = 'Frontend developer';
  titleTwo = '& graphic designer';

  return (
    <StyledHeader style={{ backgroundColor: 'violet' }}>
      <div>
        <StyledTitle>
          <div>
            <StyledName>
              <div>{name}</div>
            </StyledName>
            <h1>{title}</h1>
            <div>{titleTwo}</div>
          </div>
        </StyledTitle>
        <img src={img} alt="Ulrikas profile" />
      </div>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
background-image: url(${backgroundImg});
    color: blue;
    position: relative;
    width: 100%;
    height: 60vh;
    left: 0px;
    top: 0px;


img {
    position: absolute;
    width: 180px;
    height: 180px;
    right: 25%;
    bottom: -7%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    float: right;
    margin-top: 80px;
}
`;

const StyledName = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 30px;
`;

const StyledTitle = styled.div`
    position: absolute;
    width: auto;
    
    left: 10vw;
    top: 239px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;
    color: white;
`;

