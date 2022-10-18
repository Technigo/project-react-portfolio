import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, P, A } from '../Styled components/GlobalStyles'
import { WhitePinkH2 } from '../Styled components/HeadlineStyles'

const MyThoughts = () => {
// An array for my articles in Medium (to be updated)
  const Articles = [
    {
      name: 'Visual Learning (Or Just Going Crazy?',
      url: 'https://medium.com/@jessika.lind/visual-learning-or-just-going-crazy-8bed5ea03163',
      intro: 'If you Google the word “Visualization”, you are presented with a whole lot of different information. Everything from inspiring quotes (“You can reach that goal, just visualize it!”) to instructions on memory techniques. Let me tell you what “Visualization” means to me — eight weeks into the Technigo Web Development Bootcamp.',
      date: '2022-10-16'
    }
  ]

  return (
    <OuterWrapper>
      <InnerWrapper>
        <WhitePinkH2>MY THOUGHTS</WhitePinkH2>

        {Articles.map((article) => {
          return (
            <div>
              <Date>{article.date}</Date>
              <BlogName>{article.name}</BlogName>
              <A href={article.date}>
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
const ReadMoreArrow = styled.span`
  color: #FF7777;
  font-weight: 600;
`