/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect } from 'react';

import styled from 'styled-components/macro';
import { BlueTitle, InnerWrapperSection, OuterWrapperSection, TagWrapper } from 'styles/ProjectStyles';
import { API_URL_MEDIUM } from 'utils/Urls';

const MyThoughts = () => {
  const [articleFromMedium, setArticleFromMedium] = useState([]);

  const Medium = () => {
    fetch(API_URL_MEDIUM)
      .then((res) => res.json())
      .then((data) => setArticleFromMedium(data.items))
      .catch((err) => console.error(err))
      .finally(() => console.log('no errors'))
  }

  useEffect(() => {
    Medium()
  }, []);

  // This function is for controlling the lenght of the string or content fetched from the article
  const sliceStringFromArticle = (article, startPoint, maxLength) => {
    return (article.length > maxLength ? article.slice(startPoint, maxLength) : article
    )
  }

  return (
    <OuterWrapperSection>
      <InnerWrapperSection>
        <BlueTitle
          tabIndex="0">
          MY THOUGHTS
        </BlueTitle>
        <MyThoughtsWrapper>
          {articleFromMedium.map((article) => {
            return (
              <MyThoughtsCard key={article.title}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer">
                  <MyThoughtsImage>
                    <img
                      src={article.thumbnail}
                      alt={article.title} />
                  </MyThoughtsImage>
                  <MyThoughtsInfo>
                    <ArticleDate>{`${sliceStringFromArticle(article.pubDate, 0, 10)}`}</ArticleDate>
                    <ArticleTitle tabIndex="0">
                      {article.title.toUpperCase()}
                    </ArticleTitle>
                    <p>
                      {`${sliceStringFromArticle(article.description, 0, 200).replace(/[/]/g, '').replace(/<p>/g, '').replace(/<strong>/g, '')}... `}
                      <BlueSpan>&gt;&gt;</BlueSpan>
                    </p>
                  </MyThoughtsInfo>
                  <TagWrapper grey>
                    {article.categories.map((tag) => {
                      return (
                        <h5 key={tag}>{tag.replace(/-/g, ' ').toUpperCase()}</h5>
                      )
                    })}
                  </TagWrapper>
                </a>
              </MyThoughtsCard>
            )
          })}
        </MyThoughtsWrapper>
      </InnerWrapperSection>
    </OuterWrapperSection>
  )
}
export default MyThoughts;

const MyThoughtsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
`
const MyThoughtsCard = styled.div`
  width: 100%;
  margin: 5vh 0 5vh 0;
  @media (min-width: 668px) {
    width: 45%;  
  }
  @media (min-width: 1024px) {
    :hover img {
      filter: brightness(50%);
    }
  }
`
const MyThoughtsImage = styled.div`
  width: 100%;
  height: 200px;
  & img {
    width: 100%;
    height: 200px;
    filter: brightness(75%);
    object-fit: cover;
  }
`
const MyThoughtsInfo = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  margin: 1vh 0 1vh 0;
  & p {
    margin: 0;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 17px;
    line-height: 29px;
    color: #000000;
  }
`
const ArticleDate = styled.h4`
    font-weight: 700;
    font-size: 18px;
    line-height: 35px;
    color: #406882;
`
const ArticleTitle = styled.h4`
    font-weight: 700;
    font-size: 17px;
    line-height: 29px;
    color: #000000;
`
const BlueSpan = styled.span`
  color: #406882;
  font-weight: 800;
  font-size: 17px;
`