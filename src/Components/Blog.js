/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title } from 'StyledComponents/GlobalComponents'
import mind from '../images/mind.jpg'
import { Arrow } from '../Components/OtherProjects'

const MyThoughts = styled.div`
background: #F4F4F4;
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
 
`

const HeaderContainer = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
`

const ArticleContainer = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
`

const Link = styled.a`
text-decoration: none;
display: flex;
flex-direction: column;
align-items: center;
color: black;
`

const Blog = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <HeaderContainer>
          <Title>My Thougths</Title>
        </HeaderContainer>
        <MyThoughts>
          <ArticleContainer>
            <div>
              <Link
                a
                href="https://medium.com/@cecilia.raden/what-experiences-can-a-administrator-bring-into-tech-fd8a8203a99f"
                target="_blank"
                rel="noreferrer">
                <img
                  src={mind}
                  alt="Head with thoughts"
                  width={500} />

                <div>
                  <p>October 2022</p>
                  <h4>What experiences can a administrator bring into tech?</h4>
                  <p> As I threw myself into the world of tech one year ago,
                    I had this recurrent thought about the fact that my background
                    was not related to tech at all. If I really want to start a
                    new career, shouldn’t it be something that is applicable on my
                     earlier experience? These are my thoughts now, 2 months into the
                     Technigo bootcamp, where I’m currently changing the path
                     of my career — totally. <Arrow> >> </Arrow>
                  </p>
                </div>
              </Link>
            </div>
          </ArticleContainer>
        </MyThoughts>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Blog