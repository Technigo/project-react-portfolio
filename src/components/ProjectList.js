import React from 'react';
import FeaturedProjects from 'components/FeaturedProjects';

const Projects = [
    {
        projectImg:'',
        title: '<The Labyrinth /> Game',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Redux, React, Javascript, HTML5, CSS3',
        githubLink: '',
        liveLink: ''
    },
    {
        projectImg:'',
        title: 'ToDo App',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Redux, React, Javascript, HTML5, CSS3',
        githubLink: '',
        liveLink: 'https://backandforthlist.netlify.app/'
    },
    {
        projectImg:'',
        title: 'Color Quiz',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Redux, React, Javascript, HTML5, CSS3',
        githubLink: '',
        liveLink: 'https://great-color-quiz.netlify.app/'
    },
    {
        projectImg:'',
        title: 'Day dream survey',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3, React',
        githubLink: '',
        liveLink: 'https://dream-party.netlify.app/'
    },
    {
        projectImg:'',
        title: 'Weather App',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3',
        githubLink: '',
        liveLink: 'https://taupe-kitten-1e868d.netlify.app/'
    },
    {
        projectImg:'',
        title: 'Guess home',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3',
        githubLink: '',
        liveLink: 'https://guess-home.netlify.app/'
    },
    {
        projectImg:'',
        title: 'Chatbot',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        techLanguage: 'Javascript, HTML5, CSS3',
        githubLink: '',
        liveLink: 'https://shillyshallyartgallery.netlify.app/'
    },
]

const ProjectList = () => {
    return (
        <ProjectHeader>Featured Projects</ProjectHeader>
        {Projects.map((project) => {
            return (
                <FeaturedProject
                imgSrc={project.projectImg}
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