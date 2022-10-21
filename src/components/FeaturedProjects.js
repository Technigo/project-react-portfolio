import React, { useState, useEffect } from 'react';
import { OuterWrapper } from './OuterWrapper'

/* import styled from 'styled-components'; */
/* import { API_KEY } from 'urls/urls' */
/* import { Link, useParams } from 'react-router-dom'; */

const FeaturedProjects = () => {
	const [featuredProjects, setFeaturedProjects] = useState('')
	const [error, setError] = useState('')
	const API_URL = 'https://api.github.com/users/Petrasoderstrom1612/repos'

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				if (data.id) {
					setFeaturedProjects(data)
				} else {
					setError(true)
				}
			})
	}, [API_URL])

	if (error) {
		return (
			<div>error</div>
		)
	}

	return (
		<OuterWrapper primary>
			<div className="innerwrapper">{featuredProjects.id}</div>
		</OuterWrapper>
	)
}

export default FeaturedProjects;
