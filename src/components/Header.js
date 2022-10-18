import React from 'react'
import styled from 'styled-components'

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
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
    color: blue;
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0px;
    top: 0px;
`;

const StyledName = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 30px;
`

const StyledTitle = styled.div`
    position: fixed;
    width: auto;
    height: 243px;
    left: 20px;
    top: 239px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;

  color: white;
`;

export default Header;