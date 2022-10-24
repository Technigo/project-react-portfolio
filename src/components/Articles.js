import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './styles/Wrappers';
import backgroundImg from '../assets/forest.jpeg';

export const Articles = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <h3>My thoughts about code</h3>
        <div>
          <img src={backgroundImg} alt="project img" width="100%" />
          <Content>
            <h5>Oct 17, 2022</h5>
            <h6>My journey towards becoming a web developer</h6>
            <a href="https://medium.com/@saralie.bognandi/my-journey-towards-becoming-a-web-developer-f7e42c31e522">
              <p>
                In February I sent in my application to the online 20 week
                bootcamp at Technigo to study web development. Our application
                assignment was to create a simple one page site with a title,
                par.. <span>{'>>'}</span>
              </p>
            </a>
          </Content>
        </div>
      </InnerWrapper>
    </BlockSection>
  );
};

const Content = styled.div`
  h5 {
    font-weight: lighter;
  }
  a {
    underline: none;
  }
  span {
    color: red;
    font-weight: bolder;
  }

  span:hover {
    color: green;
  }
`;
