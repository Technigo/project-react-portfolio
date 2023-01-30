/* eslint-disable max-len */
import React from 'react'
import { CardDiv, CardholderDiv, CardImage, CardTextDiv, TagDiv } from './styled/Cards'
import { InlineHeading, SectionHeading, SubsectionHeading } from './styled/Headings'
import { OuterWrapper, InnerWrapper } from './styled/Wrappers'

export const Projects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>FEATURED PROJECTS</SectionHeading>
        <CardholderDiv>
          <a href="https://github.com/jnbjensen/hobit-frontend-fork">
            <CardDiv>
              <div>
                <CardImage
                  src="images/hobit.png"
                  alt="hobit project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>Hobit</h4>
                <p>A full-stack app that gamifies the building of healthy habits through daily challenges.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React</div>
                <div>Redux</div>
                <div>APIs</div>
                <div>Express</div>
                <div>MongoDB</div>
              </TagDiv>
            </CardDiv>
          </a>
          <a href="https://github.com/jnbjensen/project-happy-thoughts">
            <CardDiv>
              <div>
                <CardImage
                  src="images/happythoughts.png"
                  alt="happy thoughts project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>Happy Thoughts</h4>
                <p>A Twitter-inspired app that
                  allows you to post &apos;happy thoughts&apos; to an API and view the
                   20 most recent happy thoughts posted to the API.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React</div>
                <div>Redux</div>
                <div>APIs</div>
                <div>Express</div>
                <div>MongoDB</div>
              </TagDiv>
            </CardDiv>
          </a>
          <a href="https://github.com/jnbjensen/project-todos">
            <CardDiv>
              <div>
                <CardImage
                  src="images/tasklist.png"
                  alt="tasklist project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>Tasklist</h4>
                <p>A minimalistic tasklist app that allows the user to create/delete tasks and change their status to completed.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React</div>
                <div>Redux</div>
              </TagDiv>
            </CardDiv>
          </a>
          <a href="https://github.com/jnbjensen/project-redux-quiz">
            <CardDiv>
              <div>
                <CardImage
                  src="images/reduxquiz.png"
                  alt="redux quiz project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>Coding Quiz</h4>
                <p>A quiz with five multiple-choice questions, a progress counter and a summary page at the end, all of which are built around Redux state management.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React</div>
                <div>Redux</div>
              </TagDiv>
            </CardDiv>
          </a>
        </CardholderDiv>

        <SubsectionHeading>OTHER PROJECTS</SubsectionHeading>
        <div>
          <p><a href="https://github.com/jnbjensen/project-labyrinth" rel="noreferrer" target="_blank"><InlineHeading>LABYRINTH</InlineHeading></a> A retro text-based adventure game which uses an API to chart the user&apos;s course through the story.
            <a href="https://github.com/jnbjensen/project-labyrinth" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>Redux</div>
            <div>APIs</div>
          </TagDiv>
        </div>
        <div>
          <p><a href="https://github.com/jnbjensen/topify" rel="noreferrer" target="_blank"><InlineHeading>TOPIFY</InlineHeading></a> Built with React, this Spotify-inspired single-page app retrieves top new album and single releases from an API.
            <a href="https://github.com/jnbjensen/topify" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>APIs</div>
          </TagDiv>
        </div>
        <div>
          <p><a href="https://github.com/jnbjensen/riddles" rel="noreferrer" target="_blank"><InlineHeading>RIDDLES</InlineHeading></a> Built with React, this Lord of the Rings-themed quiz challenges you to answer Gollum&apos;s five riddles.
            <a href="https://github.com/jnbjensen/riddles" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
          </TagDiv>
        </div>
        <div>
          <p><a href="https://github.com/jnbjensen/webflix" rel="noreferrer" target="_blank"><InlineHeading>WEBFLIX</InlineHeading></a> Built with React, this Netflix-inspired multi-page app allows you to view details about popular movies fetched from an API.
            <a href="https://github.com/jnbjensen/webflix" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
          </TagDiv>
        </div>
        <div>
          <p><a href="https://github.com/jnbjensen/project-weather-app" rel="noreferrer" target="_blank"><InlineHeading>WEATHER APP</InlineHeading></a> A weather app that displays
           today&apos;s weather and a five-day forecast for (nearly) any city in the world
          <a href="https://github.com/jnbjensen/project-weather-app" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </TagDiv>
        </div>
        <div>
          <p><a href="https://github.com/jnbjensen/project-guess-who" rel="noreferrer" target="_blank"><InlineHeading>GUESS WHO?</InlineHeading></a> A
           browser version of the classic boardgame &apos;Guess Who?&apos;
          <a href="https://github.com/jnbjensen/project-guess-who" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </TagDiv>
        </div>
        <div>
          <p><a href="https://github.com/jnbjensen/project-chatbot" rel="noreferrer" target="_blank"><InlineHeading>CHATBOT</InlineHeading></a> A joke-generating chatbot
            <a href="https://github.com/jnbjensen/project-chatbot" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </TagDiv>
        </div>
        <div>
          <p><a href="https://github.com/jnbjensen/project-news-site" rel="noreferrer" target="_blank"><InlineHeading>NEWS SITE</InlineHeading></a> A
           simple website with (fake) news articles
          <a href="https://github.com/jnbjensen/project-news-site" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
          </TagDiv>
        </div>
      </InnerWrapper>
    </OuterWrapper>
  )
}