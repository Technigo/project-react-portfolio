/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import FeaturedProject from './FeaturedProject';
import OtherProject from './OtherProject';
import weatherAppImg from '../images/thumbnail-weatherapp.webp';
import happyThoughtsImg from '../images/thumbnail-happy-thoughts.webp'
import musicReleasesImg from '../images/thumbnail-music-releases.webp'
import guessWhoImg from '../images/thumbnail-guesswho.webp'
import chatBotImg from '../images/thumbnail-chatbot.webp'
import newsSiteImg from '../images/thumbnail-newssite.webp'

const Projects = () => {
/*  JOBBAR VIDARE MED DET HÄR
const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/ElinSegelov/repos')
      .then((data) => data.json())
      .then((fetchedRepos) => setRepos(fetchedRepos))
      .catch((error) => console.error(error))
  }, []);
  const allRepos = repos.map((repo) => {
    return (
      <div key={repo.id}>
        <p>{repo.name}</p>
        <img src={`https://raw.githubusercontent.com/ElinSegelov/${repo.name}/master/code/images/thumbnail.webp`} alt={repo.name} />

      </div>
    )
  })
  return (
    <div>
      {allRepos}
    </div>
  ) */
  return (
    <section className="featured-projects bg-darker show-off">
      <h2 className="grid-heading">Featured Projects</h2>

      <div className="grid-wrapper projects-wrapper">
        <FeaturedProject
          deployedLink="https://wondrous-longma-306268.netlify.app/"
          projectImage={happyThoughtsImg}
          projectTitle="Project: Happy thoughts"
          overlayText="Happy Thoughts"
          projectDescription="A Twitter-like message feed fetching and posting to API."
          techPTags={
            <>
              <p>React</p>
              <p>CSS3</p>
              <p>JSX</p>
              <p>API</p>
            </>
          }
          repoLink="https://github.com/ElinSegelov/project-happy-thoughts" />

        <FeaturedProject
          deployedLink="https://inquisitive-fudge-c150a0.netlify.app/"
          projectImage={musicReleasesImg}
          projectTitle="Project: Music Releases"
          overlayText="Music Releases"
          projectDescription="Summary of reacently released singles and albums using data from a mocked up API fetch."
          techPTags={
            <>
              <p>React</p>
              <p>CSS3</p>
              <p>JSX</p>
            </>
          }
          repoLink="https://github.com/ElinSegelov/project-music-releases" />

        <FeaturedProject
          deployedLink="#"
          projectImage={weatherAppImg}
          projectTitle="Project: Weather App"
          overlayText="Weather App"
          projectDescription="Weather app built in JavaScript using Open Weather API."
          techPTags={
            <>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript ES6</p>
              <p>API</p>
            </>
          }
          repoLink="#" />

        <FeaturedProject
          deployedLink="https://aesthetic-cat-671dc8.netlify.app"
          projectImage={guessWhoImg}
          projectTitle="Project: Guess Who?!"
          overlayText="Guess Who?!"
          projectDescription="Classic board game Guess Who?! built with JavaScript"
          techPTags={
            <>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript ES6</p>
            </>
          }
          repoLink="#" />
      </div>

      <div className="other-wrapper">
        <h3 className="sub-heading">Other Projects</h3>
        <OtherProject
          deployedLink="https://www.svt.se"
          projectImage={chatBotImg}
          projectTitle="Project: Chatbot"
          projectDescription="Weather app built in JavaScript using Open Weather API."
          techPTags={
            <>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript ES6</p>
              <p>API</p>
            </>
          }
          repoLink="https://www.google.com" />

        <OtherProject
          deployedLink="https://www.svt.se"
          projectImage={newsSiteImg}
          projectTitle="Project: News Site"
          projectDescription="Weather app built in JavaScript using Open Weather API."
          techPTags={
            <>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript ES6</p>
              <p>API</p>
            </>
          }
          repoLink="https://www.google.com" />
      </div>
    </section>
  )
}

export default Projects;