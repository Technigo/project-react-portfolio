import React from 'react';
import FeaturedProjects from 'components/FeaturedProjects';
import Artsie from 'images/Artsie.png';
import ColorQuiz from 'images/ColorQuiz.png'
import GuessWho from 'images/GuessWho.png'
import Labyrinth from 'images/Labyrinth.png'
import WeatherApp1 from 'images/WeatherApp1.png'
import PartyServey from 'images/PartyServey.png'
import Backandforth from 'images/Backandforth.png'

const Projects = [
    {
        projectImg:`${Labyrinth}`,
        title: '<The Labyrinth /> Game',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Redux, React, Javascript, HTML5, CSS3',
        githubLink: 'https://github.com/AndreaHedstrom/project-labyrinth',
        liveLink: 'https://reliable-sorbet-d720d3.netlify.app/'
    },
    {
        projectImg:`${Backandforth}`,
        title: 'ToDo App',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Redux, React, Javascript, HTML5, CSS3',
        githubLink: 'https://github.com/AndreaHedstrom/project-todos',
        liveLink: 'https://backandforthlist.netlify.app/'
    },
    {
        projectImg:`${ColorQuiz}`,
        title: 'Color Quiz',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Redux, React, Javascript, HTML5, CSS3',
        githubLink: 'https://github.com/AndreaHedstrom/Redux-quiz',
        liveLink: 'https://great-color-quiz.netlify.app/'
    },
{ 
        projectImg:`${PartyServey}`,
        title: 'Day dream survey',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3, React',
        githubLink: 'https://github.com/AndreaHedstrom/project-survey',
        liveLink: 'https://dream-party.netlify.app/'
    },
    {
        projectImg:`${WeatherApp1}`,
        title: 'Weather App',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3',
        githubLink: 'https://github.com/AndreaHedstrom/project-weather-app',
        liveLink: 'https://taupe-kitten-1e868d.netlify.app/'
    },
    {
        projectImg:`${GuessWho}`,
        title: 'Guess home',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3',
        githubLink: 'https://github.com/AndreaHedstrom/project-guess-who',
        liveLink: 'https://guess-home.netlify.app/'
    },
    {
        projectImg:`${Artsie}`,
        title: 'Chatbot',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3',
        githubLink: 'https://github.com/AndreaHedstrom/project-chatbot',
        liveLink: 'https://shillyshallyartgallery.netlify.app/'
    },
]

const ProjectList = () => {
    return (
        <ProjectHeader>Featured Projects</ProjectHeader>
        {Projects.map((project) => {
            return (
                <FeaturedProjects
                projectImg={project.projectImg}
                title={project.title}
                text={project.text}
                techLanguage={project.techLanguage}
                githubLink={project.githubLink}
                liveLink={project.liveLink} />
            )
        })}

    )
}

export default ProjectList;