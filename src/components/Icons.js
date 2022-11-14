import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';
import styled from 'styled-components/macro'

// eslint-disable-next-line max-len
export const Icons = ({ boxWidth, linkWidth, linkedin, github, stackOverflow, color }) => {
  return (
    <>
      <StyledLink color={color} linkWidth={linkWidth} href="https://www.linkedin.com/in/linneaajger" aria-label="link to Linneas linkedin-profile">
        <OuterBox color={color} boxWidth={boxWidth}>
          <FaLinkedinIn />
        </OuterBox>
        <p>{linkedin}</p>
      </StyledLink>
      <StyledLink color={color} linkWidth={linkWidth} href="https://github.com/LinneaAjger" aria-label="link to Linneas github account">
        <OuterBox color={color} boxWidth={boxWidth}>
          <FiGithub />
        </OuterBox>
        <p color={color}>{github}</p>
      </StyledLink>
      <StyledLink color={color} linkWidth={linkWidth} href="https://stackoverflow.com/users/19495108/linnea-a" aria-label="link to Linneas stack Overflow account">
        <OuterBox color={color} boxWidth={boxWidth}>
          <ImStackoverflow />
        </OuterBox>
        <p color={color}>{stackOverflow}</p>
      </StyledLink>
    </>
  )
}

export const StyledIcons = styled.img`
margin: ${(props) => (props.iconMargin)};
width: ${(props) => (props.iconWidth)};
`

const OuterBox = styled.div`
border: 2px solid ${(props) => (props.color)};
border-radius: 50%;
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
transition: 0.3s ease-in-out;

&:hover {
transform: scale(1.1);
transform: translate(0%,-10%);}

svg {
  height: 2rem;
  width: 2rem;
}
`

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.linkWidth)};
  text-decoration: none;
  text-align: center;
  color: ${(props) => (props.color)};

p{
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 20px;
}

svg {
  transition: 0.3s ease-in-out;
  padding: 5px;

}

& :hover > svg, .OuterBox:hover {
transform: scale(1.1)
}
  `