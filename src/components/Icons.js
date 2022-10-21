import React, { useMemo } from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';
import { IconContext } from 'react-icons';
import styled from 'styled-components/macro'

// eslint-disable-next-line max-len
export const Icons = ({ boxWidth, linkWidth, linkedin, github, stackOverflow }) => {
  const IconColor = useMemo(() => ({ color: 'white', size: '2rem', className: 'react-icons' }), []);

  return (
    <IconContext.Provider value={IconColor}>

      <StyledLink linkWidth={linkWidth} href="https://www.linkedin.com/in/linneaajger" aria-label="link to Linneas linkedin-profile">
        <OuterBox boxWidth={boxWidth}>
          <FaLinkedinIn />
        </OuterBox>
        <p>{linkedin}</p>
      </StyledLink>
      <StyledLink linkWidth={linkWidth} href="https://github.com/LinneaAjger" aria-label="link to Linneas github account">
        <OuterBox boxWidth={boxWidth}>
          <FiGithub />
        </OuterBox>
        <p>{github}</p>
      </StyledLink>
      <StyledLink linkWidth={linkWidth} href="https://stackoverflow.com/users/19495108/linnea-a" aria-label="link to Linneas stack Overflow account">
        <OuterBox boxWidth={boxWidth}>
          <ImStackoverflow />
        </OuterBox>
        <p>{stackOverflow}</p>
      </StyledLink>
    </IconContext.Provider>
  )
}

export const StyledIcons = styled.img`
margin: ${(props) => (props.iconMargin)};
width: ${(props) => (props.iconWidth)};

`

const OuterBox = styled.div`
border: 2px solid white;
border-radius: 50%;
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
margin: 3px;
padding: 10px;
transition: 0.3s ease-in-out;

&:hover {
transform: scale(1.1);
transform: translate(0%,-10%);}

`
const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.linkWidth)};
  text-decoration: none;
  text-align: center;

p{
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  margin-top: 20px;
}

svg {
  transition: 0.3s ease-in-out;

}

& :hover > svg, .OuterBox:hover {
transform: scale(1.1)
}
  `