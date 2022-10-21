import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { OuterWrapper } from './OuterWrapper';

const FeaturedProjects = () => {
	const [featuredProjects, setFeaturedProjects] = useState([])
	const API_URL = 'https://api.github.com/users/Petrasoderstrom1612/repos'

	const fetchAPI = () => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setFeaturedProjects(data))
			.catch((err) => console.error(err))
			.finally(() => console.log('no errors'))
	}

	useEffect(() => {
		fetchAPI()
	}, []);

	return (
		<div>
			{featuredProjects.filter(
				(project) => (project.name !== 'project-react-portfolio' && 'project-portfolio')
    && (project.name.includes('project'))
			).map((project) => {
				return (
					<OuterWrapper primary>
						<div className="innerwrapper" key={project.id}>
							<h5>{project.name.replace(/project-/, '').replace(/-/, ' ').replace(/ app/, '').concat(' site')
								.toUpperCase()}
							</h5>
							<FeaturedProjectsStyler> {project.description}</FeaturedProjectsStyler>
						</div>
					</OuterWrapper>
				)
			})}
		</div>
	)
}

export default FeaturedProjects;

const FeaturedProjectsStyler = styled.div`
display: flex;
justify-content: center;
`
