import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle, Tag } from './reusable/Wrappers';
import data from '../data.json'
import Github from '../icons/github30.png';

export const OtherProjects = () => {
  const OtherProjectSection = styled.div`
    padding: 50px 0;
  `;

  const OtherProjectWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

  const OtherProjectsContent = styled.div`
    padding: 20px 0;
    width: 750px;
    margin: 10px;
  `;

  const OtherProjectsList = styled.div`
    text-align: left;
    text-decoration: none;
    margin: 10px;
    h4 {
      color: #c8aa89c6;
      text-transform: uppercase;
      }
    p {
      color: #c8aa89c6;
      font-size: 15px;
      }
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <OtherProjectSection>
          <SectionTitle>
            <p>other projects</p>
          </SectionTitle>
          <OtherProjectWrapper>
            <OtherProjectsContent>
              {data.map((item) => (
                item.id > 2 ? (
                  <OtherProjectsList key={item.title}>
                    <a
                      href={item.netlify}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      <p>{item.title}</p>
                    </a>
                    <p>{item.description}</p>
                    <a
                      href={item.github}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src={Github}
                        alt="Github Caroline Soderstrom" />
                    </a>
                    <Tag>
                      {item.tools.map((tag) => (
                        <p className="tag" key={tag}>{tag}</p>
                      ))}
                    </Tag>
                  </OtherProjectsList>
                ) : null
              ))}
            </OtherProjectsContent>
          </OtherProjectWrapper>
        </OtherProjectSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}