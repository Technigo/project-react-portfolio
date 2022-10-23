import React from 'react'
import './portfolio.css'
import img1 from '../Assets/guesswho.png'
import img2 from '../Assets/musicrelease.png'
import img3 from '../Assets/happythought.png'
import img4 from '../Assets/projectmovies.png'
import img5 from '../Assets/survey.png'
import img6 from '../Assets/phonebook.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Game of guess who',
    github: 'https://github.com/Bibiruu/project-guess-who',
    demo: 'https://maria-guess-who-game.netlify.app/'
  },
  {
    id: 2,
    image: img2,
    title: 'Spotify music release with the fetching of API',
    github: 'https://github.com/Bibiruu/project-music-releases',
    demo: 'https://maria-project-music-releases.netlify.app/'
  },
  {
    id: 3,
    image: img3,
    title: 'Happy thoughts chat',
    github: 'https://github.com/Bibiruu/project-music-releases',
    demo: 'https://github.com/Bibiruu/project-happy-thoughts'
  },
  {
    id: 4,
    image: img4,
    title: 'Movie release',
    github: 'https://github.com/Bibiruu/project-movies',
    demo: 'https://week8movies.netlify.app/'
  },
  {
    id: 5,
    image: img5,
    title: 'Survey',
    github: 'https://github.com/Bibiruu/project-movies',
    demo: 'https://week8movies.netlify.app/'
  },
  {
    id: 6,
    image: img6,
    title: 'Card',
    github: 'https://github.com/Bibiruu/crispy-octo-engine',
    demo: 'https://silver-pegasus-ed721d.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <div>
                    <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                    <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio