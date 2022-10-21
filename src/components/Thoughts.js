import React from 'react'
import styled from 'styled-components'
import { ContainerWhite, StyledGrid, Subheading } from 'GlobalStyles';
import thoughtOneImage from 'images/My-thoughts-1.png'
import placeHolderImage from 'images/Placeholder-img.png'

export const Thoughts = () => {
  return (
    <ContainerWhite>
      <Subheading>My thoughts about code</Subheading>
      <StyledGrid>

        <ItemWrapper>
          <a href="https://medium.com/@ulrikalovisa/my-crush-on-coding-534682bd3d" target="_blank" rel="noreferrer">
            <div className="thought__image"><img src={thoughtOneImage} alt="My crush on coding" /></div>
            <div className="thought__text" />
            <div className="thought__date">October 2022</div>
            <div className="thought__title">My crush on coding</div>
            <div className="thought__description">My journey into coding and how I feel about it 8 weeks into the boot camp. (Spoiler alert: I love it!)</div>
          </a>
        </ItemWrapper>

        <ItemWrapper>
          <a href="#" target="_blank" rel="noreferrer">
            <div className="thought__image"><img src={placeHolderImage} alt="My crush on coding" /></div>
            <div className="thought__text" />
            <div className="thought__date">October 2022</div>
            <div className="thought__title">Thought 2 headline</div>
            <div className="thought__description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </a>
        </ItemWrapper>

      </StyledGrid>
    </ContainerWhite>
  )
};

export const ItemWrapper = styled.div`
    width: 350px;
    margin: auto;

    .thought__image img{
            width: 350px;
            height: auto;
        }

        .thought__date{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            text-align: left;
            font-size: 15px;
            color: #E8415E;
            padding-top: 20px;
        }

        .thought__title{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            text-align: left;
            font-size: 20px;
            color: black;
            padding-top: 5px;
        }
        
        .thought__description{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            text-align: left;
            font-size: 15px;
            line-height: 25px;
            padding-top: 5px;
        }

        a {
        text-decoration: none;
        color: black;
    }

`
