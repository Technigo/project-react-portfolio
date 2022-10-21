import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, P, A, ReadMoreArrow } from '../Styled components/GlobalStyles'
import { WhitePinkH2 } from '../Styled components/HeadlineStyles'
import { MediumArticles } from '../Data/MediumAricles'
import VisualLearningImg from '../Images/Medium-Visual-Learning.jpeg'

const MyThoughts = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <WhitePinkH2>MY THOUGHTS</WhitePinkH2>
        {MediumArticles.map((article) => {
          return (
            <div key={article.name}>
              <img src={VisualLearningImg} alt="" />
              <Date>{article.date}</Date>
              <BlogName>{article.name}</BlogName>
              <A href={article.url}>
                <P>
                  {article.intro}
                  <ReadMoreArrow> &gt;&gt; </ReadMoreArrow>
                </P>
              </A>
            </div>
          );
        })}
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default MyThoughts

const Date = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 41px;
  color: #FF7777;
`
const BlogName = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
`