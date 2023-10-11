// import Artsie from 'images/Artsie.png';
import Quizzy from 'images/Quizzy.png'
import Labyrinth from 'images/labyrinth-mockup.png'
import WeatherLondon from 'images/WeatherLondon.png'
import Checklist from 'images/Checklist.png'
import MovieMovie from 'images/moviess.png'
import PartyServey1 from 'images/PartyServey1.png'
import GuessWindow from 'images/GuessWindow.png'
import AuthImg from 'images/AuthImg.png'
import Guardians from 'images/Guardinas.png'

const ProjectList = [
  {
    projectImg: `${Guardians}`,
    title: 'Final Project',
    text: 'Me and my teams final project for Technigo bootcamp. A fullstack project where we created an app that encourages people to do good things for the environment in a fun and positive way using gamification.',
    techLanguage: ['Redux', 'React', 'Javascript', 'Node', 'Express', 'MongoDB'],
    githubLink: '',
    liveLink: 'https://papaya-concha-9783c6.netlify.app/login'
  },
  {
    projectImg: `${AuthImg}`,
    title: 'Authorization',
    text: 'API and frontend for user authentication. It uses bcrypt for secure password storage, validates user input, and enforces authentication for specific endpoints.',
    techLanguage: ['Redux', 'React', 'Javascript', 'MongoDB'],
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
    text: 'A quiz, built with Redux, for kids where they in a fun way learn a little bit about colors.',
    techLanguage: ['Redux', 'React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/Redux-quiz',
    liveLink: 'https://great-color-quiz.netlify.app/'
  },
  {
    projectImg: `${MovieMovie}`,
    title: 'Movie site',
    text: 'A classic movie site where I followed a given design',
    techLanguage: ['React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-movies',
    liveLink: 'https://annandreas-popular-movies.netlify.app'
  },
  {
    projectImg: `${PartyServey1}`,
    title: 'Day dream survey',
    text: 'A survey using React that leverages state management. Through the use of the useState hook, I have connected HTML form inputs to the applications state. This enables users to plan an imaginary party by interacting with form fields, and the application dynamically displays different components based on their progress within the survey.',
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
    text: 'A new version of the classic game Guess Who using JavaScript. Wich home is the secret one? In the process, I have delved deep into JavaScript concepts like objects, arrays, and functions',
    techLanguage: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-guess-who',
    liveLink: 'https://guess-home.netlify.app/'
  }
]

export default ProjectList;