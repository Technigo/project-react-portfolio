// import Artsie from 'images/Artsie.png';
import Quizzy from 'images/Quizzy.png'
import Labyrinth from 'images/labyrinth-mockup.png'
import WeatherLondon from 'images/WeatherLondon.png'
import Checklist from 'images/Checklist.png'
import MovieMovie from 'images/moviess.png'
import PartyServey1 from 'images/PartyServey1.png'
import GuessWindow from 'images/GuessWindow.png'
import AuthImg from 'images/AuthImg.png'

const ProjectList = [
  {
    projectImg: `${AuthImg}`,
    title: 'Authorization',
    text: 'API and frontend for user authentication. It uses bcrypt for secure password storage, validates user input, and enforces authentication for specific endpoints.',
    techLanguage: ['Redux', 'React', 'Javascript'],
    githubLink: 'https://github.com/AndreaHedstrom/project-labyrinth',
    liveLink: 'https://flourishing-creponne-3b5e77.netlify.app/login'
  },
  {
    projectImg: `${Labyrinth}`,
    title: '<The Labyrinth />',
    text: 'A labyrinth game built with React and Redux with an old school design, inspired by some code elements.',
    techLanguage: ['Redux', 'React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-labyrinth',
    liveLink: 'https://reliable-sorbet-d720d3.netlify.app/'
  },
  {
    projectImg: `${Checklist}`,
    title: 'Back & forth list',
    text: 'A checklist made with React and Redux designed to help keep track of wich clothes and items are at home and wich ones are at preschool. The everyday struggle as a parent.',
    techLanguage: ['Redux', 'React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-todos',
    liveLink: 'https://backandforthlist.netlify.app/'
  },
  {
    projectImg: `${Quizzy}`,
    title: 'Color Quiz',
    text: 'A quiz for kids where they in a fun way learn a little bit about colors.',
    techLanguage: ['Redux', 'React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/Redux-quiz',
    liveLink: 'https://great-color-quiz.netlify.app/'
  },
  {
    projectImg: `${MovieMovie}`,
    title: 'Movie site',
    text: 'A classig movie site where I followed a given design',
    techLanguage: ['React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-movies',
    liveLink: 'https://annandreas-popular-movies.netlify.app'
  },
  {
    projectImg: `${PartyServey1}`,
    title: 'Day dream survey',
    text: 'A little survey where you plan an imaginary party',
    techLanguage: ['Javascript', 'HTML5', 'CSS3', 'React'],
    githubLink: 'https://github.com/AndreaHedstrom/project-survey',
    liveLink: 'https://dream-party.netlify.app/'
  },
  {
    projectImg: `${WeatherLondon}`,
    title: 'Weather App',
    text: 'A Weather app that fetches data via API to display the current weather in London. We were provided with a design template, which we used as a guide throughout the project.',
    techLanguage: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-weather-app',
    liveLink: 'https://taupe-kitten-1e868d.netlify.app/'
  },
  {
    projectImg: `${GuessWindow}`,
    title: 'Guess home',
    text: 'A new version of the classig game Guess Who. Wich home is the secret one?',
    techLanguage: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-guess-who',
    liveLink: 'https://guess-home.netlify.app/'
  }
]

export default ProjectList;