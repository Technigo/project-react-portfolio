import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { OuterWrapper } from './OuterWrapper';

const OtherProjects = () => {
	const [otherProjects, setOtherProjects] = useState([])
	const API_URL = 'https://api.github.com/users/Petrasoderstrom1612/repos'

	const fetchAPI = () => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setOtherProjects(data))
			.catch((err) => console.error(err))
			.finally(() => console.log('no errors'))
	}

	useEffect(() => {
		fetchAPI()
	}, []);

	const renderTags = (tags) => {
		return tags.map((tag) => {
			return (<div>{tag.toUpperCase()}</div>)
		})
	}

	return (
		<div>
			{otherProjects.filter(
				(project) => (project.name === 'project-chatbot' || project.name === 'project-guess-who' || project.name === 'project-weather-app')
			).map((project) => {
				return (
					<OuterWrapper primary>
						<div className="innerwrapper" key={project.id}>
							<h5>{project.name.replace(/project-/, '').replace(/-/, ' ').replace(/ app/, '').concat(' site')
								.toUpperCase()}
							</h5>
							<DescriptionStyler>
								<p>{project.description}</p>
							</DescriptionStyler>
							<LinkStyler>{project.html_url}</LinkStyler>
							<StyledLinks>{renderTags(project.topics)}</StyledLinks>
						</div>
					</OuterWrapper>
				)
			})}
		</div>
	)
}

export default OtherProjects;

const DescriptionStyler = styled.div`
display: flex;
justify-content: center;
`
const LinkStyler = styled.div`
display: flex;
justify-content: center;
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 0%;
	`

