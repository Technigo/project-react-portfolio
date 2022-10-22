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
			return (<div className="tagger">{tag.toUpperCase()}</div>)
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
							<h3>Other projects</h3>
							<h5>{project.name.replace(/project-/, '').replace(/-/, ' ').replace(/ app/, '').concat(' site')
								.toUpperCase()}
							</h5>
							<DescriptionStyler>
								<p>{project.description}</p>
							</DescriptionStyler>
							<LinkStyler><a href={project.html_url}>Github link</a></LinkStyler>
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
flex-direction: row;
justify-content: center;
font-size: 1.2rem;
margin-bottom: .3rem;
margin-top: .3rem;
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: center;
  padding: 0%;

	.tagger{
		margin-left: .5rem;
		font-family: "Roboto", sans-serif;
  color: #fff;
  font-weight: bold;
  background-color: rgb(216, 0, 166);
  text-decoration: none;
  font-size: 1rem;
  line-height: 10px;
  padding: .5rem;
  border-radius: 5px;
	}
	`

