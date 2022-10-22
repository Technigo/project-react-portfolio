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
          <a href="https://github.com/jnbjensen/project-movies">
            <CardDiv>
              <div>
                <CardImage
                  src="images/fp-movies.png"
                  alt="movies project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>WebFlix</h4>
                <p>Built with React, this Netflix-inspired multi-page app allows you to view
                   details about popular movies fetched from an API.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>React</div>
              </TagDiv>
            </CardDiv>
          </a>
          <a href="https://github.com/jnbjensen/project-happy-thoughts">
            <CardDiv>
              <div className="card-img">
                <CardImage
                  src="images/fp-happythoughts.png"
                  alt="happy thoughts project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>Happy Thoughts</h4>
                <p>Built with React, this Twitter-inspired app
                  allows you to post &apos;happy thoughts&apos; to an API and view the
                   20 most recent happy thoughts posted to the API.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>React</div>
              </TagDiv>
            </CardDiv>
          </a>
          <a href="https://github.com/jnbjensen/project-survey">
            <CardDiv>
              <div className="card-img">
                <CardImage
                  src="images/fp-survey.png"
                  alt="survey project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>Survey</h4>
                <p>Built with React, this Lord of the
                   Rings-themed quiz challenges you to answer Gollum&apos;s five riddles.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>React</div>
              </TagDiv>
            </CardDiv>
          </a>
          <a href="https://github.com/jnbjensen/project-music-releases">
            <CardDiv>
              <div className="card-img">
                <CardImage
                  src="images/fp-music-releases.png"
                  alt="music releases project"
                  title="View project on GitHub" />
              </div>
              <CardTextDiv>
                <h4>Music Releases</h4>
                <p>Built with React, this Spotify-inspired
                   single-page app features new album and single releases.
                </p>
              </CardTextDiv>
              <TagDiv card>
                <div>HTML</div>
                <div>CSS</div>
                <div>React</div>
              </TagDiv>
            </CardDiv>
          </a>
        </CardholderDiv>

        <SubsectionHeading>OTHER PROJECTS</SubsectionHeading>
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
        <div className="other-project">
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
        <div className="other-project">
          <p><a href="https://github.com/jnbjensen/project-chatbot" rel="noreferrer" target="_blank"><InlineHeading>CHATBOT</InlineHeading></a> A joke-generating chatbot
            <a href="https://github.com/jnbjensen/project-chatbot" rel="noreferrer" target="_blank"> &gt;&gt;</a>
          </p>
          <TagDiv>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </TagDiv>
        </div>
        <div className="other-project">
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