import Artsie from 'images/Artsie.png';
import ColorQuiz from 'images/ColorQuiz.png'
import GuessWho from 'images/GuessWho.png'
import Labyrinth from 'images/Labyrinth.png'
import WeatherApp1 from 'images/WeatherApp1.png'
import PartyServey from 'images/PartyServey.png'
import Backandforth from 'images/Backandforth.png'

const ProjectList = [
  {
    projectImg: `${Labyrinth}`,
    title: 'Labyrinth Game',
    text: 'A labyrinth game',
    techLanguage: ['Redux', 'React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-labyrinth',
    liveLink: 'https://reliable-sorbet-d720d3.netlify.app/'
  },
  {
    projectImg: `${Backandforth}`,
    title: 'ToDo App',
    text: 'checklist that helps parents get a better overview of which things are where.',
    techLanguage: ['Redux', 'React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-todos',
    liveLink: 'https://backandforthlist.netlify.app/'
  },
  {
    projectImg: `${ColorQuiz}`,
    title: 'Color Quiz',
    text: 'A quiz for kids where they in a fun way could focus on learning instead of keeping score',
    techLanguage: ['Redux', 'React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/Redux-quiz',
    liveLink: 'https://great-color-quiz.netlify.app/'
  },
  {
    projectImg: `${PartyServey}`,
    title: 'Day dream survey',
    text: 'A small survey about planning an imaginary party',
    techLanguage: ['Javascript', 'HTML5', 'CSS3', 'React'],
    githubLink: 'https://github.com/AndreaHedstrom/project-survey',
    liveLink: 'https://dream-party.netlify.app/'
  },
  {
    projectImg: `${WeatherApp1}`,
    title: 'Weather App',
    text: 'Weather app that fetches data and where the design changes depending on todays weather',
    techLanguage: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-weather-app',
    liveLink: 'https://taupe-kitten-1e868d.netlify.app/'
  },
  {
    projectImg: `${GuessWho}`,
    title: 'Guess home',
    text: 'A new take of the classig game Guess Who.',
    techLanguage: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-guess-who',
    liveLink: 'https://guess-home.netlify.app/'
  },
  {
    projectImg: `${Artsie}`,
    title: 'Chatbot',
    text: 'My very first project in Javascript - a chatbot that help you find art for your walls',
    techLanguage: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/AndreaHedstrom/project-chatbot',
    liveLink: 'https://shillyshallyartgallery.netlify.app/'
  }
]

export default ProjectList;
