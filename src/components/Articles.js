import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper, List, Content } from './styles/Wrappers';
import articleImg from '../assets/article.jpeg';

export const Articles = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <h3>My thoughts about code</h3>
        <List>
          <ClonedContent>
            <a
              href="https://medium.com/@saralie.bognandi/my-journey-towards-becoming-a-web-developer-f7e42c31e522"
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden>
              <img src={articleImg} alt="project img" />
              <h5>Oct 17, 2022</h5>
              <h6>My journey towards becoming a web developer</h6>

              <p>
                In February I sent in my application to the online 20 week
                bootcamp at Technigo to study web development. Our application
                assignment was to create a simple one page site with a title,
                par.. <span>{'>>'}</span>
              </p>
            </a>
          </ClonedContent>
        </List>
      </InnerWrapper>
    </BlockSection>
  );
};

const ClonedContent = styled(Content)`
  margin: 50px 0;
  box-sizing: border-box;

  h5 {
    font-weight: lighter;
  }
  a {
    underline: none;
  }
  img {
    width: 100%;
  }

  span {
    color: #fa382f;
    font-weight: bolder;
  }

  span:hover {
    color: white;
  }
`;
