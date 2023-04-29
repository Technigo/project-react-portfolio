import React from 'react';

const Projects = [
    {
        projectImg:'',
        title: '',
        text: '',
        techLanguage: '',
        githubLink: '',
        liveLink: ''
    },
    {
        projectImg:'',
        title: '',
        text: '',
        techLanguage: '',
        githubLink: '',
        liveLink: ''
    },
    {
        projectImg:'',
        title: '',
        text: '',
        techLanguage: '',
        githubLink: '',
        liveLink: ''
    },
    {
        projectImg:'',
        title: '',
        text: '',
        techLanguage: '',
        githubLink: '',
        liveLink: ''
    },
    {
        projectImg:'',
        title: '',
        text: '',
        techLanguage: '',
        githubLink: '',
        liveLink: ''
    },
    {
        projectImg:'',
        title: '',
        text: '',
        techLanguage: '',
        githubLink: '',
        liveLink: ''
    },
    {
        projectImg:'',
        title: '',
        text: '',
        techLanguage: '',
        githubLink: '',
        liveLink: ''
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